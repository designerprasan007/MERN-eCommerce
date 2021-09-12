import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import{RegisterUserFun} from '../../../actions/UserAction'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Home.css'
const Register = ({Button, TextField}) =>{
    const [fieldError, setfieldError] = useState({status:false, error:""})
    const [regFields, setregFields] = useState({firstname:'', lastname:'', email:'', phone:'', password:'', confPassword:''});
    const [clearError, setclearError] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        let timerId;
        if (clearError > 0) {
          const timer = () => setTimeout(() => setclearError(clearError - 1), 1000);
          timerId = timer();
        } else {
          setclearError('Error cleared!');
          setfieldError({...fieldError, status:false, error:""})
        }
        return () => {
            clearTimeout(timerId);
          };// eslint-disable-next-line
      }, [clearError]);

    const handleSubmit = () =>{
        if(regFields.password !== regFields.confPassword){
            setfieldError({...fieldError, status:true, error:"Password not match"})
            setclearError(5);
            return true
        }
        if(regFields.password.length < 5){
            setfieldError({...fieldError, status:true, error:"Password Length must be greater then 5"})
            setclearError(5);
            return true
        }

        Object.entries(regFields).map(([key, value]) => {
            if(value === ''){
                setfieldError({...fieldError, status:true, error:key+" Required"})
                setclearError(5);
                return true
            }
            return true
        })
        dispatch(RegisterUserFun(regFields));
    }
    return(
        <>
        <h3 className="text-center">Register</h3>
        {fieldError.status && <p className="text-danger">{fieldError.error}</p>}
        <form className="container pt-5 ">
            <div className="row">
                <div className="col-6">
                    <div className="form-group py-3">
                        <TextField label="Firstname" onChange={(e) => setregFields({...regFields, firstname:e.target.value})} value={regFields.firstname} type="text" placeholder="Firstname.." fullWidth required  />
                    </div>  
                </div>
                <div className="col-6">
                    <div className="form-group py-3">
                        <TextField label="Lastname" type="text" onChange={(e) => setregFields({...regFields, lastname:e.target.value})} value={regFields.lastname} placeholder="Lastname.." fullWidth required  />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group py-3">
                        <TextField label="Email" type="email" onChange={(e) => setregFields({...regFields, email:e.target.value})} value={regFields.email} placeholder="Email.." fullWidth required  />
                    </div>  
                </div>
                <div className="col-6">
                    <div className="form-group py-3">
                        <PhoneInput
                        className="myclass"
                        country={'in'}
                        id="phoneinp"
                        value={regFields.phone}
                        onChange={(e) => setregFields({...regFields, phone:e})}
                        />
                    </div>
                </div>  
                <div className="col-6">
                    <div className="form-group">
                        <TextField label="Password" onChange={(e) => setregFields({...regFields, password:e.target.value})} value={regFields.password} type="password" placeholder="Enter Password" fullWidth required  />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <TextField label="Confirm Password" onChange={(e) => setregFields({...regFields, confPassword:e.target.value})} value={regFields.confPassword} type="password" placeholder="Confirm Password" fullWidth required  />
                    </div>    
                </div>  
            </div>
            <div className="text-center pt-3">
                <Button variant="contained" size="large" color="primary" onClick={handleSubmit} >Register</Button>
            </div>	
        </form>
        </>
    )
}

export default Register