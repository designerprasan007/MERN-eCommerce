import {createApi, ManageStoreApi, LoginStoreApi} from '../api/StoreApi';
export const AddStoreAction = (storedata, history) => async(dispatch) =>{
	try{
		await createApi(storedata);
		dispatch({type:'STORE_CREATED', payload:'CREATED'})
	}
	catch(err){
		console.log(err)
		dispatch({type:'STORE_FAILED', payload:'FAILED'})
	}
}

export const StoreLoginFun = (userdata, history) => async(dispatch, getState) =>{
	try{
		const {data} = await  LoginStoreApi(userdata); 
		dispatch({type:'LOGIN_ADMIN', payload:data.ownerdata})
		localStorage.setItem('Userinfo', JSON.stringify(data.ownerdata))
		history.push('/storeOwner')
	}catch(err){
		console.log(err);
	}
}

export const ManageStorefun = (storedata) =>async(dispatch, getState) =>{
	try{
		const  {
			AuthReducer:{userdata}
		} = getState()
		const token = userdata?.token;

		const  {
			PageData:{pagedata}
		} = getState()
		
		await ManageStoreApi(storedata, token) 
		if(storedata.action === 'Delete'){
			pagedata.varifiedStoresCount = pagedata.varifiedStoresCount - 1;
			pagedata.verified = pagedata.verified.filter((item) => item._id !== storedata.id);
		}else{
			pagedata.unverifiedStoresCount = pagedata.unverifiedStoresCount - 1;
			pagedata.unverified = pagedata.unverified.filter((item) => {
				if(item._id === storedata.id){
					pagedata.verified.push(item);
				}
				return item._id !== storedata.id
			});
		}
		dispatch({type:'PAGE_DATA', payload:pagedata});
	}
	catch(err){
		console.log(err)
	}
}