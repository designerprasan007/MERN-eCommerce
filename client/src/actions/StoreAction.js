import {createApi, LoginStoreApi, getStoreDataApi} from '../api/StoreApi';
export const AddStoreAction = (storedata) => async(dispatch) =>{
	try{
		await createApi(storedata);
		dispatch({type:'STORE_CREATED', payload:'CREATED'})
	}
	catch(err){
		console.log(err)
		dispatch({type:'STORE_FAILED', payload:'FAILED'})
	}
}

export const StoreLoginFun = (userdata, history) => async(dispatch) =>{
	try{
		const {data} = await  LoginStoreApi(userdata); 
		dispatch({type:'LOGIN_ADMIN', payload:data.ownerdata})
		localStorage.setItem('Userinfo', JSON.stringify(data.ownerdata))
		history.push('/storeOwner')
	}catch(err){
		console.log(err);
		dispatch({type:'STORE_LOGIN_ERROR', payload:err.response.data.err})
	}
}



export const StoreDataFunc = () => async(disapatch, getState) =>{
	const {
		AuthReducer:{userdata}
	} = getState();
	const token = userdata.token;
	const {data} = await getStoreDataApi(token)
	disapatch({type:'PRODUCT_DATA', payload:data.pageData[0]});
}