const Navbar = ({history}) =>{
	const LogoutFun = () =>{
		localStorage.removeItem("Userinfo");
		window.location.href = 'http://localhost:3000/adminlogin'
	}
	return(
		<nav className="navbar">
		  <h3 className="navbar-brand">E-buy</h3>
		  <form className="form-inline">
		    <button className="btn btn-outline-success my-2 my-sm-0" onClick={LogoutFun} type="button">Logout</button>
		  </form>
		</nav>
		)
}

export default Navbar