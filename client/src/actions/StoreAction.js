import {createApi} from '../api/StoreApi';
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