import {adminLoginApi} from '../api/AdminApi.js';

export const loginAdminAction = (userdata, history) => async(dispatch) =>{
	try{
		const {data} = await adminLoginApi(userdata);
		dispatch({type:'LOGIN_ADMIN', payload:data.admindata})
		localStorage.setItem('Userinfo', JSON.stringify(data.admindata))
		history.push('/addStore')
	}
	catch(err){
		dispatch({type:'LOGIN_ERROR', payload:err.response.data.err})
	}
}