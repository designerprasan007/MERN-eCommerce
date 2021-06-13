import {adminLoginApi} from '../api/AdminApi';
import {adminPages} from '../api/AdminApi'
export const loginAdminAction = (userdata, history) => async(dispatch) =>{
	try{
		const {data} = await adminLoginApi(userdata);
		dispatch({type:'LOGIN_ADMIN', payload:data.admindata})
		localStorage.setItem('Userinfo', JSON.stringify(data.admindata))
		history.push('/admin')
	}
	catch(err){
		dispatch({type:'LOGIN_ERROR', payload:err.response.data.err})
	}
}

export const getPagedata = () => async(dispatch, getState) =>{
	const  {
			AuthReducer:{userdata}
		} = getState()
		const token = userdata?.token;
		const {data} = await adminPages(token);
		dispatch({type:'PAGE_DATA', payload:data.pageData});
}