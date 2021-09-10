import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './Home.css'
const Register = ({Button, TextField}) =>{
    return(
        <>
        <h3 className="text-center">Register</h3>
        <form className="container pt-5 ">
            <div className="row">
                <div className="col-6">
                    <div className="form-group py-3">
                        <TextField label="Firstname" type="text" placeholder="Firstname.." fullWidth required  />
                    </div>  
                </div>
                <div className="col-6">
                    <div className="form-group py-3">
                        <TextField label="Lastname" type="text" placeholder="Lastname.." fullWidth required  />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group py-3">
                        <TextField label="Email" type="email" placeholder="Email.." fullWidth required  />
                    </div>  
                </div>
                <div className="col-6">
                    <div className="form-group py-3">
                        <PhoneInput
                        className="myclass"
                        country={'in'}
                        id="phoneinp"
                        // value={phonenum}
                        // onChange={(e) => setPhonenum(e)}
                        />
                    </div>
                </div>  
                <div className="col-6">
                    <div className="form-group">
                        <TextField label="Password" type="password" placeholder="Enter Password" fullWidth required  />
                    </div>
                </div>
                <div className="col-6">
                    <div className="form-group">
                        <TextField label="Confirm Password" type="password" placeholder="Confirm Password" fullWidth required  />
                    </div>    
                </div>  
            </div>
            <div className="text-center pt-3">
                <Button variant="contained" size="large" color="primary" >Register</Button>
            </div>	
        </form>
        </>
    )
}

export default Register