import  React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core'
import Login from './Login';
import Register from './Register';
import './Home.css';
const UserLogin = () => {
	const [view, setview] = useState('Login')
    return(
        <div className="container-fluid">
			<div className="row pt-5">
				<div className="pt-5 col-md-6 offset-md-3 col-12">
					<div className="shadow-sm p-3 mb-5 bg-white rounded">
					<div className="text-end">
						<button onClick={() => setview('Login')} className={view === 'Login' ? "btn btn-warning btn-sm me-3" : "btn btn-sm btn-info me-3"} >Login</button>
						<button onClick={() => setview('Register')} className={view !== 'Login' ? "btn btn-warning btn-sm" : "btn btn-sm btn-info"}>register</button>
					</div>
						{
							view === 'Login' ? <Login TextField={TextField} Button={Button}  /> : <Register TextField={TextField} Button={Button} />
						}
					</div>		
				</div>
			</div>	
		</div>

    )
}

export default UserLogin