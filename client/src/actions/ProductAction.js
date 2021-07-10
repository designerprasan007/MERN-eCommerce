import {CreateProductApi} from '../api/ProductsApi';
export const createNewProductFunc = (formdata, history) => async(dispatch, getState) =>{
	try{
		console.log(formdata);
		const prod = await CreateProductApi(formdata);
		console.log(prod)
	}
	catch(err){
		console.log(err);
	}
}