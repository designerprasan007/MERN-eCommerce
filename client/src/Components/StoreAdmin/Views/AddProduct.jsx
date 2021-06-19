import {useState} from 'react';
import StepOne from './AddProductsForm/StepOne';
import StepTwo from './AddProductsForm/StepTwo';

const AddProduct = () =>{
	const [productData, setProductData] = useState({productName:'', productDesc:'', productPrice:{}, productColor:{}, productQty:'', productCata:'', productSpeci:'', productSize:{}, productBrand:'', productImg:{}})
	const [pageCount, setPageCount] = useState(1);
	
	const NextPage = () =>{
		setPageCount(pageCount + 1)
	}
	const PrevPage = () =>{
		setPageCount(pageCount - 1)
	}

	return (
		<div className="container-fluid">
			{pageCount === 1 && <StepOne NextPage={NextPage} productData={productData} setProductData={setProductData}/>}
			{pageCount === 2 && <StepTwo NextPage={NextPage} PrevPage={PrevPage} productData={productData} setProductData={setProductData}/>}
			{pageCount === 3 && '<h1>3</h1>'}
			{pageCount === 4 && '<h1>4</h1>'}
			{pageCount === 5 && '<h1>5</h1>'}
			{pageCount === 6 && '<h1>6</h1>'}

			
		</div>
		)
}

export default AddProduct