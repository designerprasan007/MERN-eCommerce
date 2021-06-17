import {useSelector} from 'react-redux';
import './SideNav.css'

const Navbar = ({history}) =>{
	const {userdata} = useSelector((state) => state.AuthReducer);
	if(userdata?.email !== process.env.REACT_APP_ADMIN_EMAIL){
		window.location.href = 'http://localhost:3000/adminlogin'
	}

	const LogoutFun = () =>{
		localStorage.removeItem("Userinfo");
		window.location.href = 'http://localhost:3000/adminlogin'
	}
	return(
		<nav className="navbar HeadNav">
		  <h3 className="navbar-brand">E-buy</h3>
		  <form className="form-inline">
		    <button className="btn btn-outline-success my-2 my-sm-0" onClick={LogoutFun} type="button">Logout</button>
		  </form>
		</nav>
		)
}

export default Navbar