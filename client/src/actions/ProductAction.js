import {CreateProductApi, EditProductApi} from '../api/ProductsApi';
export const createNewProductFunc = (formData) => async(dispatch, getState) =>{
	try{
		const  {
			AuthReducer:{userdata}
		} = getState()
		const token = userdata?.token;
		const {data} = await CreateProductApi(formData, token);
		console.log(data.success)
		dispatch({type:'PRODUCT_STORED', payload:data})
	}
	catch(err){
		console.log(err);
		dispatch({type:'PRODUCT_FAILED', payload:err})

	}
}

export const EditProductFunc = (formData) => async(dispatch, getState) =>{
	try{
		console.log('action')
		const {
			AuthReducer:{userdata}
		} = getState();
		const token = userdata?.token;
		const {data} = await EditProductApi(formData, token)
		console.log(data);
	}catch(err){
		console.log(err);
	}
}