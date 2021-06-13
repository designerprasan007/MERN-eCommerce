import axios from 'axios';

const adminUrl = process.env.REACT_APP_ADMIN_URL;

export const createApi = (storedata, token) => axios.post(`${adminUrl}/newStore`, storedata,
	{headers:{
				Authorization: 'Admin ' + token 
			}}
	)