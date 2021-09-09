import { ManageStoreApi} from '../api/StoreApi';
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
		// console.log(err.response);
		dispatch({type:'LOGIN_ERROR', payload:err.response.data.err})
	}
}

export const ManageStorefun = (storedata) =>async(dispatch, getState) =>{
	try{
		const  {
			AuthReducer:{userdata},
			PageData:{pagedata}
		} = getState()
		const token = userdata?.token;
		await ManageStoreApi(storedata, token) 
		if(storedata.action === 'Delete'){
			pagedata.varifiedStoresCount = pagedata.varifiedStoresCount - 1;
			pagedata.verified = pagedata.verified.filter((item) => item._id !== storedata.id);
		}else{
			pagedata.unverifiedStoresCount = pagedata.unverifiedStoresCount - 1;
			pagedata.unverified = pagedata.unverified.filter((item) => {
				if(item._id === storedata.id){
					pagedata.verified.push(item);
				}
				return item._id !== storedata.id
			});
		}
		dispatch({type:'PAGE_DATA', payload:pagedata});
	}
	catch(err){
		console.log(err)
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