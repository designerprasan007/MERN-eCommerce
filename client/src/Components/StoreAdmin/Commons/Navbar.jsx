import {Button, Toolbar, Typography, AppBar, makeStyles, } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = ({history}) =>{
	const LogoutFun = () =>{
		localStorage.removeItem("Userinfo");
		window.location.href = 'http://localhost:3000/adminlogin'
	}
    const classes = useStyles();
	return(
		<div className={classes.root}>
	      <AppBar position="static">
	        <Toolbar className="container">
	          <Typography variant="h6" className={classes.title}>
	            E-Buys
	          </Typography>
	          <Button color="inherit" onClick={LogoutFun}>Logout</Button>
	        </Toolbar>
	      </AppBar>
	    </div>
		)
}

export default Navbar