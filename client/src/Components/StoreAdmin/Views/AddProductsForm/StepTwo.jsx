import {TextField, Button, TextareaAutosize} from '@material-ui/core'
import Select from 'react-select'

import {Colors} from '../../../../Helpers/Colors';

import './StepForm.css'
const StepTwo = ({PrevPage, NextPage, productData, setProductData}) =>{
	
		const handlechange = (options) =>{
			setProductData({...productData, productColor:options})
			console.log(options);
		}
	return (
		<div className="container-fluid">
			<div className="row pt-5">
				<div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
					<div className="shadow-lg p-3 mb-5 bg-white rounded">
						<h3 className="text-center">Add Product</h3>
						<form className="container">
						  <div className="form-group py-3">
						   <Select isMulti onChange={handlechange} value={productData.productColor}
									    name="colors"
									    className="basic-multi-select"
									    classNamePrefix="select"
									    options={Colors} />
						  </div>
						  <div className="form-group">
								  <TextareaAutosize className="textfield" aria-label="minimum height" required rowsMin={3} placeholder="Product Description" />
						  </div>
						  <div className="form-group pt-3">
							  <TextField label="Price" value={productData.productPrice} onChange={(e) => setProductData({...productData, productPrice:e.target.value})} type="number" fullWidth required />
						  </div>
						  <div className="form-group pt-3">
							  <TextField label="Quantity" value={productData.productQty} onChange={(e) => setProductData({...productData, productQty:e.target.value})} type="number" fullWidth required />
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