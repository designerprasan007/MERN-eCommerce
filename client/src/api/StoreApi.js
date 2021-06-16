import axios from 'axios';

const storeUrl = process.env.REACT_APP_STORE_URL;

export const createApi = (storedata, token) => axios.post(`${storeUrl}/newStore`, storedata)

export const ManageStoreApi = (storedata, token) =>axios.post(`${storeUrl}/manageStore`, storedata, {
	headers:{
				Authorization: 'Admin ' + token 
			}}
		)