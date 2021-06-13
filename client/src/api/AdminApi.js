import axios from 'axios'

const adminUrl = process.env.REACT_APP_ADMIN_URL;

export const adminLoginApi = (userdata) => axios.post(`${adminUrl}/adminlogin`, userdata);

export const adminPages = (token) => axios.post(`${adminUrl}/adminPages`, {},
		{ headers:{
					Authorization: 'Admin ' + token 
				}}
		)
