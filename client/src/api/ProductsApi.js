import axios from 'axios';

const productUrl = process.env.REACT_APP_PRODUCT_URL;


export const CreateProductApi = (formdata, token) =>axios.post(`${productUrl}/newProduct`, formdata,{
	headers:{
		"Content-Type":"multipart/form-data",
		Authorization: 'Store ' + token 
	}}
)