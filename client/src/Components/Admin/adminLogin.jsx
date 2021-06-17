import  React, {useState} from 'react';
import {loginAdminAction} from '../../actions/adminActions';
import {useDispatch, useSelector} from 'react-redux';
import {TextField} from '@material-ui/core'

import './Style.css';

const AdminLogin = ({history}) => {
	const [logindata, setLoginData] = useState({email:'', password:''});
	const [error, setError] = useState(false);

	const dispatch = useDispatch();

	const {loginerror} = useSelector((state) => state.AuthReducer);
	if(loginerror){
		console.log(loginerror)
		setTimeout(() => dispatch({type:'LOGIN_RESET'}), 5000)
	}

	const submitForm = (e) =>{
		e.preventDefault();
		if(!logindata.email || !logindata.password){
			setError(true)
			return
		}
		else{
			dispatch(loginAdminAction(logindata, history));
		}
	}


	return(
		<div className="container-fluid">
			<div className="row pt-5">
				<div className="pt-5 col-md-4 offset-md-4 col-sm-4 offset-sm-4">
					<div className="shadow-lg p-3 mb-5 bg-white rounded">
						<h3 className="text-center">Login</h3>
						<form className="container pt-5 ">
						  {error && <p className="text-danger">All Fields Required</p>}	
						  {loginerror && <p className="text-danger">Invalid Credentials</p>}
						  <div className="form-group py-3">
							  <TextField label="Email" type="text" value={logindata.email} placeholder="Enter Email" fullWidth required onChange={(e) => setLoginData({...logindata, email:e.target.value})} />
						  </div>
						  <div className="form-group">
							  <TextField label="Password" type="password" value={logindata.password} placeholder="Enter Password" fullWidth required onChange={(e) => setLoginData({...logindata, password:e.target.value})} />
						  </div>
						  <div className="text-center pt-3">
						  	<button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
						  </div>	
						</form>
					</div>		
				</div>
			</div>	
		</div>
		)}

export default AdminLogin