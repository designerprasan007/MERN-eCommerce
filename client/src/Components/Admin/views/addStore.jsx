import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AddStoreAction} from '../../../actions/StoreAction';
import {getCountryService, getStateService, getCitiesService} from '../../../services/cscService';
import Sweetalert from '../../Commons/SweetAlert'

const AddStore = ({handleStore}) =>{
	const [storedata, setStoreData] = useState({storeName:'', storePass:'',storeAddr:'', ownerName:'',ownerEmail:'', ownerNum:'', storeCountry:'', storeState:'', storeCity:''});
	const [reqError, setAllReqError] = useState({status:false, error:''})
	const [stroreres, setStroreres] = useState({status:false, result:false, title:'', message:''});
    const [Countries, setCountries] = useState('')
    const [States, setStates] = useState('');
    const [Cities, setCities] = useState('');
	const dispatch = useDispatch();

	const {storeSuccess, stroreFail} = useSelector((state) => state.StoreReducer);

	useEffect(() =>{
		if(storeSuccess){
		setStroreres({...stroreres, status:true, result:true, title:'Success', message:'Form subitted wait for confirmation Mail'})
		}
		if(stroreFail){
			document.getElementById("submitBtn").disabled = false;
			setStroreres({...stroreres, status:true, result:false, title:'Something Went Wrong', message:'Something went wrong please try later'})
		}	// eslint-disable-next-line
	},[storeSuccess, stroreFail])

	

	const hideAlert = () =>{
		setStroreres({...stroreres, status:false, result:'', message:''})
	}

	const validateNum = (e) =>{
		const varifyNum = /^[0-9\b]+$/;
		if (e.target.value === '' || varifyNum.test(e.target.value)) {
			setStoreData({...storedata, ownerNum:e.target.value})
		}
	}

	useEffect(() =>{
		async function fetchMyAPI() {
	      let response = await getCountryService();
	      setCountries(response?.data)
	    }
	    fetchMyAPI()
	},[])


	const getCountry = (e) =>{
		setStoreData({...storedata, storeCountry:e.target.value})
		const countryname = e.target.value;
		async function getStates() {
			let states = await getStateService(countryname)
			setStates(states?.data)
		}
		getStates()	
	}

	const getState = (e) =>{
		setStoreData({...storedata, storeState:e.target.value});

		const statename = e.target.value;
		const countryname = storedata.storeCountry;
		async function getCities() {
			let cities = await getCitiesService(countryname, statename);
			setCities(cities?.data)
		}
		getCities()	

	}

	const getCity = (e) =>{
		setStoreData({...storedata, storeCity:e.target.value});
		console.log(e.target.value);
	}

	const submitForm = (e) =>{
		e.preventDefault();
		setAllReqError({...reqError, status:false, error:''});
		var EmailFormat = /\S+@\S+\.\S+/;
		if(!storedata.storeName || !storedata.storePass || !storedata.ownerName || !storedata.ownerEmail || !storedata.ownerNum || !storedata.storeAddr){
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
		document.getElementById("submitBtn").disabled = true;
		dispatch(AddStoreAction(storedata))
	}
	return(
		<div className="container-fluid pt-3">
		{stroreres.status && <Sweetalert stroreresponse={stroreres} hideAlert={hideAlert} />}
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h1 className="text-center">Create Store</h1>
		        	<form className="container">
		        	{reqError.status && <p className="text-danger">{reqError.error}</p>}
					  <div className="form-group pb-2">
					    <label htmlFor="storeName">Store Name</label>
					    <input type="text" className="form-control" value={storedata.storeName} onChange={(e) => setStoreData({...storedata, storeName:e.target.value} )} id="storeName"  />
					  </div>
					  <div className="form-group pb-2">
					    <label htmlFor="storePass">Store Password</label>
					    <input type="password" className="form-control" value={storedata.storePass} onChange={(e) => setStoreData({...storedata, storePass:e.target.value} )} id="storePass" />
					  </div>
					  <div className="form-group pb-2">
					    <label htmlFor="storeAddr">Address</label>
					    <input type="text" className="form-control" value={storedata.storeAddr} onChange={(e) => setStoreData({...storedata, storeAddr:e.target.value} )} id="storeAddr" />
					  </div>
					   <div className="form-group pb-2">
					    <label htmlFor="storeCountry">Country</label>
					   <select name="country" value={storedata.storeCountry} className="form-control" id="storeCountry" onChange={(e) => getCountry(e)}>
                            <option value="-1">Country</option>
                            {Countries.length > 0 && Countries?.map((cn) =>{
                            	return(
    	                            	<option key={cn.id} value={cn.iso2}>{cn.name}</option>
	                            	)
                            })}
                        </select>
					  </div>
					   <div className="form-group pb-2">
					    <label htmlFor="storeState">State</label>
					     <select name="state" value={storedata.storeState} className="form-control" id="storeState" onChange={(e) => getState(e)}>
                            <option value="-1">State</option>
                             {States.length > 0 && States?.map((cn) =>{
                            	return(
    	                            	<option key={cn.id} value={cn.iso2}>{cn.name}</option>
	                            	)
                            })}
                        </select>
					  </div>
					   <div className="form-group pb-2">
					    <label htmlFor="storeCity">City</label>
					      <select name="city" value={storedata.storeCity} className="form-control" id="storeCity" onChange={(e) => getCity(e)}>
                            <option value="-1">City</option>
                             {Cities.length > 0 && Cities?.map((cn) =>{
                            	return(
    	                            	<option key={cn.id} value={cn.name}>{cn.name}</option>
	                            	)
                            })}
                        </select>
					  </div>
					  <div className="form-group pb-2">
					    <label htmlFor="ownerName">Owner Name</label>
					    <input type="text" className="form-control" value={storedata.ownerName} onChange={(e) => setStoreData({...storedata, ownerName:e.target.value} )} id="ownerName"  />
					  </div>
					  <div className="form-group pb-2">
					    <label htmlFor="ownerEmail">Owner Email</label>
					    <input type="email" className="form-control" value={storedata.ownerEmail} onChange={(e) => setStoreData({...storedata, ownerEmail:e.target.value} )} id="ownerEmail"  />
					  </div>
					  <div className="form-group pb-2">
					    <label htmlFor="ownerNum">Owner Num</label>
					    <input type="text" className="form-control"  pattern="[0-9]+" value={storedata.ownerNum} onChange={(e) => validateNum(e)} id="ownerNum"  />
					  </div>
					  <div className="text-center pb-2">
					  	<button type="button" id="submitBtn" onClick={submitForm} className="btn btn-primary">Submit</button>
					  	<button type="button" onClick={handleStore} className="btn btn-danger mx-2">Close</button>
					  </div>	
					</form>
				</div>
	    	</div>
	    </div>
	)	
}


export default AddStore;