import  React from 'react';
import {Grid, Paper, Avatar, TextField, Button	} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './LoginPage.css';

const StoreLogin = ({history}) => {


	return(
			<Grid className="pt-5" container>
				<Paper elevation={10} className="paperStyle">
					<Grid align="center">
						<Avatar className="avatarBG"><LockOutlinedIcon /></Avatar>
						<h2>Signin</h2>	
					</Grid>
					<TextField label="Email" placeholder="Enter Email" fullWidth required />
					<TextField label="Password" type="password" placeholder="Enter Password" fullWidth required />
					<Button type="submit" variant="contained" className="mt-5" color="primary" fullWidth>Signin</Button>
				</Paper>
			</Grid>
		)}

export default StoreLogin