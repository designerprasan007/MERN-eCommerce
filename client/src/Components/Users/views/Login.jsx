import  React, {useState} from 'react';
import {loginAdminAction} from '../../../actions/adminActions'
import {useDispatch, useSelector} from 'react-redux';

const Login = ({Button, TextField, history}) =>{
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
        <>
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
                <Button variant="contained" size="large" color="primary" onClick={submitForm} >Login</Button>
            </div>	
        </form>
        </>
    )
}

export default Login