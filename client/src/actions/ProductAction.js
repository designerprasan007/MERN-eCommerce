import {CreateProductApi} from '../api/ProductsApi';
export const createNewProductFunc = (formData) => async(dispatch, getState) =>{
	try{
		const {data} = await CreateProductApi(formData);
		console.log(data)
	}
	catch(err){
		console.log(err);
	}
}