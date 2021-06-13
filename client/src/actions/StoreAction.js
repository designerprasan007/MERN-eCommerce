import {createApi} from '../api/StoreApi';
export const AddStoreAction = (storedata, history) => async(dispatch) =>{
	try{
		await createApi(storedata);
		history.push('/admin')
	}
	catch(err){
		console.log(err)
	}
}