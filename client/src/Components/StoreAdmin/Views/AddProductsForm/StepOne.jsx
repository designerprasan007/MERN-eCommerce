import {useState} from 'react';
import {TextField, Button, MenuItem} from '@material-ui/core'
import {Brands} from '../../../../Helpers/Brands';
const StepOne = ({NextPage, productData, setProductData}) =>{
	const [availbrand, SetAvailableBrand] = useState([]);
	const [reqError, SetReqError] = useState(false)
	const getBrand = (e) =>{
		const Catagory = e.target.value;
		setProductData({...productData, productCata:Catagory})
		const filterd = Brands.filter((ele => ele.Cata === Catagory)) 
		SetAvailableBrand(filterd)
	}
	const callNextPage = () =>{
		if(!productData.productName || !productData.productDesc || !productData.productCata || !productData.productBrand)
		{
			SetReqError(true)
			return
		}
		console.log(productData);
		NextPage();
	}

	return(
		<div className="container-fluid">
			<div className="row pt-5">
				<div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
					<div className="shadow-lg p-3 mb-5 bg-white rounded">
						<h3 className="text-center">Add Product</h3>
						<form className="container">
						{reqError && <p className="text-danger">All Fields Required</p>}
						  <div className="form-group py-3">
							  <TextField label="Product Name" value={productData.productName} onChange={(e) => setProductData({...productData, productName:e.target.value})} type="text" fullWidth required />
						  </div>
						  <div className="form-group">
							  <TextField label="Description" value={productData.productDesc} onChange={(e) => setProductData({...productData, productDesc:e.target.value})} type="text" fullWidth required />
						  </div>
						  <div className="form-group pt-3">
							    <TextField id="select" label="Catagory" value={productData.productCata} onChange={(e) => getBrand(e)} select fullWidth required>
									  <MenuItem value="Mobile">Mobile</MenuItem>
									  <MenuItem value="TV">TV</MenuItem>
									  <MenuItem value="Watch">Watch</MenuItem>
									  <MenuItem value="WashingMachine">Washing Machine</MenuItem>
									  <MenuItem value="Fridge">Fridge</MenuItem>
									  <MenuItem value="Laptop">Laptop</MenuItem>
							   </TextField>
						  </div>
						  <div className="form-group pt-3">
							    <TextField id="select" label="Brand" value={productData.productBrand} onChange={(e) => setProductData({...productData, productBrand:e.target.value})} select fullWidth required>
  								    <MenuItem value=""></MenuItem>
									{availbrand?.map((ele, id) =>(
									  <MenuItem key={id} value={ele.Name}>{ele.Name}</MenuItem>
									))}
							   </TextField>
						  </div>
						  <div className="text-center pt-3">
						  	<Button variant="contained" color="primary" onClick={() => callNextPage()} size="large" >Next</Button>
						  </div>	
						</form>
					</div>		
				</div>
			</div>	
		</div>
		)
}

export default StepOne