import {CreateProductApi} from '../api/ProductsApi';
export const createNewProductFunc = (formData) => async(dispatch, getState) =>{
	try{
		const {data} = await CreateProductApi(formData);
		console.log(data.success)
		dispatch({type:'PRODUCT_STORED', payload:data})
	}
	catch(err){
		console.log(err);
		dispatch({type:'PRODUCT_FAILED', payload:err})

	}
}