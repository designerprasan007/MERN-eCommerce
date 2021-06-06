import {useState} from 'react';
import { Modal } from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import {AddStoreAction} from '../../../actions/StoreAction';

const AddStore = ({handleStore}) =>{
	const [storedata, setStoreData] = useState({storeName:'', storePass:'', ownerName:'',ownerEmail:'', ownerNum:''});
	const [reqError, setAllReqError] = useState({status:false, error:''})
	const dispatch = useDispatch();

	const validateNum = (e) =>{
		const varifyNum = /^[0-9\b]+$/;
		if (e.target.value === '' || varifyNum.test(e.target.value)) {
			setStoreData({...storedata, ownerNum:e.target.value})
		}
	}

	const submitForm = (e) =>{
		e.preventDefault();
		setAllReqError({...reqError, status:false, error:''});
		var EmailFormat = /\S+@\S+\.\S+/;
		if(!storedata.storeName || !storedata.storePass || !storedata.ownerName || !storedata.ownerEmail || !storedata.ownerNum){
			setAllReqError({...reqError, status:true, error:'All fields required'});
			return
		}
		if(!EmailFormat.test(storedata.ownerEmail)){
			setAllReqError({...reqError, status:true, error:'Invalid Email'});
			return	
		}
		if(storedata.storePass.length < 5){
			setAllReqError({...reqError, status:true, error:'Password should be greater then 6'});
			return	
		}
		dispatch(AddStoreAction(storedata))
	}

	return(
		<Modal show={true} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
	        <Modal.Body>
	        	<h1 className="text-center">Add Store</h1>
	        	<form className="container">
	        	{reqError.status && <p className="text-danger">{reqError.error}</p>}
				  <div className="form-group py-3">
				    <label htmlFor="storeName">Store Name</label>
				    <input type="text" className="form-control" value={storedata.storeName} onChange={(e) => setStoreData({...storedata, storeName:e.target.value} )} id="storeName"  />
				  </div>
				  <div className="form-group">
				    <label htmlFor="storePass">Store Password</label>
				    <input type="password" className="form-control" value={storedata.storePass} onChange={(e) => setStoreData({...storedata, storePass:e.target.value} )} id="storePass" />
				  </div>
				  <div className="form-group py-3">
				    <label htmlFor="ownerName">Owner Name</label>
				    <input type="text" className="form-control" value={storedata.ownerName} onChange={(e) => setStoreData({...storedata, ownerName:e.target.value} )} id="ownerName"  />
				  </div>
				  <div className="form-group py-3">
				    <label htmlFor="ownerEmail">Owner Email</label>
				    <input type="email" className="form-control" value={storedata.ownerEmail} onChange={(e) => setStoreData({...storedata, ownerEmail:e.target.value} )} id="ownerEmail"  />
				  </div>
				  <div className="form-group py-3">
				    <label htmlFor="ownerNum">Owner Num</label>
				    <input type="text" className="form-control"  pattern="[0-9]+" value={storedata.ownerNum} onChange={(e) => validateNum(e)} id="ownerNum"  />
				  </div>
				  <div className="text-center pt-3">
				  	<button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
				  	<button type="button" onClick={handleStore} className="btn btn-danger mx-2">Close</button>
				  </div>	
				</form>
	        </Modal.Body>
	  	</Modal>
	)
}


export default AddStore;