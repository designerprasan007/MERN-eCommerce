import  React, {useState} from 'react';
import {loginAdminAction} from '../../actions/adminActions';
import {useDispatch, useSelector} from 'react-redux';


const StoreLogin = ({history}) => {
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
		<form className="container pt-5 loginForm">
		  {error && <p className="text-danger">All Fields Required</p>}	
		  {loginerror && <p className="text-danger">Invalid Credentials</p>}
		  <div className="form-group py-3">
		    <label htmlFor="exampleInputEmail1">Email address</label>
		    <input type="email" className="form-control" id="exampleInputEmail1" value={logindata.email} onChange={(e) => setLoginData({...logindata, email:e.target.value})}  />
		  </div>
		  <div className="form-group">
		    <label htmlFor="exampleInputPassword1">Password</label>
		    <input type="password" className="form-control" id="exampleInputPassword1" value={logindata.password} onChange={(e) => setLoginData({...logindata, password:e.target.value})} />
		  </div>
		  <div className="text-center pt-3">
		  	<button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
		  </div>	
		</form>
		)}

export default StoreLogin