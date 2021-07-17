import {useState} from 'react';
import {TextField, Button, MenuItem} from '@material-ui/core'
import {Brands} from '../../../../Helpers/Brands';
import {Colors} from '../../../../Helpers/Colors';
import Select from 'react-select'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const StepOne = ({NextPage, productData, setProductData, proClrData, setProClrData}) =>{
	const [availbrand, SetAvailableBrand] = useState([]);
	const getBrand = (e) =>{
		const Catagory = e.target.value;
		setProductData({...productData, productCata:Catagory})
		const filterd = Brands.filter((ele => ele.Cata === Catagory)) 
		SetAvailableBrand(filterd)
	}
    const handlechange = (options) =>{
        setProductData({...productData, productColor:options})
    }
	const callNextPage = () =>{
		if(!productData.productName || !productData.productModel || !productData.productCata || !productData.productBrand || !productData.productColor)
		{
            toast.info("All Fields Required... !")
			return
		}
		productData.productColor.map((val) =>{
			var obj = {color: val.value, price:'10', qty:'5', images:[]};
			proClrData.push(obj)
			return true
		})	
		NextPage();
	}

	return(
		<div className="container-fluid">
			<ToastContainer />
			<div className="row pt-5">
				<div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
					<div className="shadow-lg formBG p-3 mb-5 bg-white rounded">
						<h3 className="text-center">Add Product</h3>
						<form className="container">
						  <div className="form-group py-3">
							  <TextField label="Product Name" value={productData.productName} onChange={(e) => setProductData({...productData, productName:e.target.value})} type="text" fullWidth required />
						  </div>
						  <div className="form-group">
							  <TextField label="ModelNumber or ModelName" value={productData.productModel} onChange={(e) => setProductData({...productData, productModel:e.target.value})} type="text" fullWidth required />
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
							    <TextField id="select" label="Brand" value={productData?.productBrand || ''} onChange={(e) => setProductData({...productData, productBrand:e.target.value})} select fullWidth required>
  								    <MenuItem value=""></MenuItem>
									{availbrand?.map((ele, id) =>(
									  <MenuItem key={id} value={ele.Name}>{ele.Name}</MenuItem>
									))}
							   </TextField>
						  </div>
						   <div className="form-group py-3">
                           <Select isMulti onChange={handlechange} value={productData.productColor}
                                        name="colors"
                                        className="basic-multi-select"
                                        classNamePrefix="colors"
                                        options={Colors}
                                        placeholder="Colors*"
                                         />
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