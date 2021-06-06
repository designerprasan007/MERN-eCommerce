import axios from 'axios';

import env from "react-dotenv";


const adminUrl = env.ADMIN_URL;

export const createApi = (storedata, token) => axios.post(`${adminUrl}/newStore`, storedata,
	{headers:{
				Authorization: 'Admin ' + token 
			}}
	)