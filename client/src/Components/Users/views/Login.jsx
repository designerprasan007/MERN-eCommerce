import  React, {useState, useEffect} from 'react';
import {LoginUserFun} from '../../../actions/UserAction'
import {useDispatch, useSelector} from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Login = ({Button, TextField, history}) =>{
    const [logindata, setLoginData] = useState({email:'', password:''});
    const [showSpinner, setShowSpinner] = useState(false);
	const [error, setError] = useState(false);
    const dispatch = useDispatch();

	const {loginerror} = useSelector((state) => state.AuthReducer);
	if(loginerror){
		setTimeout(() => dispatch({type:'LOGIN_RESET'}), 5000)
	}

    useEffect(() => {
        setShowSpinner(false)
    }, [loginerror])

	const submitForm = (e) =>{
		e.preventDefault();
		if(!logindata.email || !logindata.password){
			setError(true)
			return
		}
		else{
            setShowSpinner(true)
			dispatch(LoginUserFun(logindata, history));
		}
	}
    return(
        <>
        <h3 className="text-center">Login</h3>
        <form className="container pt-5 ">
            {error && <p className="text-danger">All Fields Required</p>}	
            {loginerror && <p className="text-danger">{loginerror}</p>}
            <div className="form-group py-3">
                <TextField label="Email" type="text" value={logindata.email} placeholder="Enter Email" fullWidth required onChange={(e) => setLoginData({...logindata, email:e.target.value})} />
            </div>
            <div className="form-group">
                <TextField label="Password" type="password" value={logindata.password} placeholder="Enter Password" fullWidth required onChange={(e) => setLoginData({...logindata, password:e.target.value})} />
            </div>
            <div className="text-center pt-3">
                {!showSpinner ? <Button variant="contained" size="large"  color="primary" onClick={submitForm} >Login</Button> : 
                <Loader
                type="ThreeDots"
                color="#3F51B5"
                height={70}
                width={70}
                timeout={3000} //3 secs
              />}
            </div>	
        </form>
        </>
    )
}

export default Login