import {createApi} from '../api/StoreApi';
export const AddStoreAction = (storedata) => async(dispatch, getState) =>{
	try{
		const  {
			AuthReducer:{userdata}
		} = getState()
		const token = userdata?.token;
		if (!token) {
			dispatch({type:'NOT_AUTHORIZED', payload:'Unauthorized'});
		}
		const store = await createApi(storedata, token);
		console.log(store);
	}
	catch(err){
		console.log(err)
	}
}