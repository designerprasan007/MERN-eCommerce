import {TextField, Button, MenuItem} from '@material-ui/core'
import './StepForm.css'
const StepTwo = ({PrevPage, NextPage, productData, setProductData}) =>{
	return (
		<div className="container-fluid">
			<div className="row pt-5">
				<div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
					<div className="shadow-lg p-3 mb-5 bg-white rounded">
						<h3 className="text-center">Add Product</h3>
						<form className="container">
						  <div className="form-group py-3">
							  <TextField label="Email" type="text" placeholder="Enter Email" fullWidth required />
						  </div>
						  <div className="form-group">
							  <TextField label="Password" type="password" placeholder="Enter Password" fullWidth required />
						  </div>
						  <div className="form-group pt-3">
						  <TextField id="select" label="Catagory" value="" select fullWidth required>
							  <MenuItem value="Mobile">Mobile</MenuItem>
							  <MenuItem value="TV">TV</MenuItem>
							  <MenuItem value="Watch">Watch</MenuItem>
							  <MenuItem value="WashingMachine">Washing Machine</MenuItem>
							  <MenuItem value="Fridge">Fridge</MenuItem>
							  <MenuItem value="Laptop">Laptop</MenuItem>
						  </TextField>
						  </div>
						  <div className="text-center pt-3">
						  	<Button className="prevBtn" variant="contained" color="primary" onClick={PrevPage} size="large" >Prev</Button>
						  	<Button variant="contained" color="primary" onClick={NextPage} size="large" >Next</Button>
						  </div>	
						</form>
					</div>		
				</div>
			</div>	
		</div>
		)
}

export default StepTwo