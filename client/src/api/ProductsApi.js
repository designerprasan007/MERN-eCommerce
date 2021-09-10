import axios from 'axios';

const productUrl = process.env.REACT_APP_PRODUCT_URL;


export const CreateProductApi = (formData, token) =>axios.post(`${productUrl}/newProduct`, formData,{
	headers:{
		 'Content-Type': 'multipart/form-data',
		  Authorization: token 
	}}
)
export const EditProductApi = (formData, token) => axios.patch(`${productUrl}/editProduct`, formData, {
	headers:{
		'Content-Type': 'Multipart/form-data',
		Authorization:token
	}
})

export const DeleteProductApi = (id, token) => axios.delete(`${productUrl}/deleteProduct?id=`+id, {
	headers:{
		Authorization:token
	}
})