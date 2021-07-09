import {useState, useEffect} from 'react';
import {Button} from '@material-ui/core';
import ReactHtmlParser	 from 'react-html-parser';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {Carousel} from 'react-responsive-carousel'

import './StepForm.css'
const StepFour = ({PrevPage, NextPage, productData, proClrData}) =>{
	const [prevImages, setPrevImages] = useState(proClrData[0].images);
	const [currentImg, setCurrentImg] = useState(proClrData[0].images[0].src)
	useEffect (() =>{
		setPrevImages(proClrData[0].images)
	},[proClrData])

	const SubmitForm = (e) =>{
		console.log(proClrData);
		console.log(productData);

	}
	const setImageView = (key) =>{
		setPrevImages(proClrData[key].images)
		setCurrentImg(proClrData[key].images[0].src);
	}
	const setCurrentimg = (src) =>{
		setCurrentImg(src);
	}
	return (
		<div className="container-fluid mt-5 shadow-lg p-3 mb-5 bg-white rounded">
	        <div className="row pt-2 ">
	            <h2 className="text-center pb-5">Product Review</h2>
	            <div className="col-md-8 col-sm-12">
	            	<div className="row g-0">
	            		<div className="col-md-2 col-sm-3">
	            			{prevImages.map((viewImg, key) =>{
		       					return(
		       						<div key={key} className="py-2">
		       							<img src={viewImg.src} alt="viewImg" onClick={(() => setCurrentimg(viewImg.src))} className="mainPrevImgThumbnail" />
		       						</div>
		       						)
		       				})}
            			</div>
            			<div className="col-md-10 col-sm-9">
            				<img src={currentImg} className="img-fluid" alt="myimage" />
            			</div>
	            	</div>
       			</div>
                <div className="col-md-4 col-sm-12">
                   	<h3>Product Name: </h3>
                   	<h5>{productData.productName}</h5>
                   	<h3>Product Model: </h3>
                   	<h5>{productData.productModel}</h5>
                   	<h3>Product Brand</h3>
                   	<h5>{productData.productBrand}</h5>
                   	<h3>Product Catagory</h3>
                   	<h5>{productData.productCata}</h5>
                   	<h3>Product Description</h3>
                   	<div>
                   		{ ReactHtmlParser(productData.productSpeci) }
                   	</div>
                   	<h3>Product Colors and Details</h3>
                   	{proClrData.map((img, key) =>{
                   		return(
                   			<div key={key} className="prevImgDiv">
                   				<p className="prevImage" onClick={() => setImageView(key)}>{img.color}</p>
                   				<p>Price: {img.price}</p>
                   				<p>Qty: {img.qty}</p>

                   			</div>
                   			)
                   	})}
                </div>
            </div>  
            <div className="text-center pt-3">
                <Button className="prevBtn" variant="contained" color="primary" onClick={PrevPage} size="large" >Prev</Button>
                <Button variant="contained" color="primary"  onClick={SubmitForm} size="large" >Submit</Button>
            </div>  
        </div>
		) 
}

export default StepFour