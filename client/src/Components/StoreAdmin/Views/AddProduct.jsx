import {useState} from 'react';
import StepOne from './AddProductsForm/StepOne';
import StepTwo from './AddProductsForm/StepTwo';
import StepThree from './AddProductsForm/StepThree';
import StepFour from './AddProductsForm/StepFour';


const AddProduct = () =>{
	const [productData, setProductData] = useState({productName:'', productModel:'', productColor:[], productCata:'', productSpeci:'', productBrand:''})
	const [proClrData, setProClrData] = useState([])
	const [pageCount, setPageCount] = useState(1);
	
	const NextPage = () =>{
		if(pageCount < 5){
			setPageCount(pageCount + 1)
		}
	}
	const PrevPage = () =>{
		if(pageCount > 0){
			setPageCount(pageCount - 1)
			console.log(productData, proClrData);
		}
	}

	return (
		<div className="container-fluid">
			{pageCount === 1 && <StepOne NextPage={NextPage} productData={productData} setProductData={setProductData} proClrData={proClrData}setProClrData={setProClrData}/>}
			{pageCount === 2 && <StepTwo NextPage={NextPage} PrevPage={PrevPage} productData={productData} setProductData={setProductData} proClrData={proClrData}setProClrData={setProClrData} />}
			{pageCount === 3 && <StepThree NextPage={NextPage} PrevPage={PrevPage} productData={productData} setProductData={setProductData}/>}
			{pageCount === 4 && <StepFour NextPage={NextPage} PrevPage={PrevPage} productData={productData} proClrData={proClrData} />}
		</div>
		)
}

export default AddProduct