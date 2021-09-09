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
		let {
			AuthReducer:{userdata},
			StoreReducer:{productData}
		} = getState();
		const token = userdata?.token;
		const {data} = await EditProductApi(formData, token)
		productData = productData.filter((val) => {
			if(val._id === data._id){
				val.productName = data.productName
				val.productBrand = data.productBrand
				val.productSpeci = data.productSpeci
				val.productCata = data.productCata
				val.productModel = data.productModel
				val.productColor = data.productColor
				val.productId = data.productId
				val.ownerID = data.ownerID
			}
			return true	
		});
		dispatch({type:'PRODUCT_DATA', payload:productData});

	}catch(err){
		console.log(err);
	}
}