import axios from 'axios';

const productUrl = process.env.REACT_APP_PRODUCT_URL;


export const CreateProductApi = (formData, token) =>axios.post(`${productUrl}/newProduct`, formData,{
	headers:{
		 'Content-Type': 'multipart/form-data',
		Authorization: 'Store ' + token 
	}}
)