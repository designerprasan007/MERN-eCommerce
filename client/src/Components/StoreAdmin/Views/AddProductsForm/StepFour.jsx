import {Button} from '@material-ui/core';
import ReactHtmlParser	 from 'react-html-parser';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel'

import './StepForm.css'
const StepFour = ({PrevPage, NextPage, productData, proClrData}) =>{
	console.log(proClrData);
	const SubmitForm = (e) =>{
		console.log('pookay');
	}
	return (
		<div className="container-fluid mt-5 shadow-lg p-3 mb-5 bg-white rounded">
	        <div className="row pt-5 ">
	            <h3 className="text-center pb-3">Product Review</h3>
	            <div className="col-md-6 col-sm-12">
       				 <Carousel >
		            	{proClrData?.map((clr, key) =>{
	               			return(
					                <div key={key}>
					                    <img src={clr.images.src} alt="proImage" className="img-fluid" />
					                    <div className="legend">
					                    	<h3>Price: {clr.price}</h3>
					                    	<h3>Quantity: {clr.qty}</h3>

					                    </div>
					                </div>
	               				)
	               		})}
		            </Carousel>

                </div>
                <div className="col-md-6 col-sm-12">
                   	<h2>{productData.productName} ({productData.productModel}) </h2>
                   	<h2>{productData.productCata}</h2>
                   	<h2>About Item</h2>
                   	<div>
                   		{ ReactHtmlParser(productData.productSpeci) }
                   	</div>
                </div>
            </div>  
            <div className="text-center pt-3">
                <Button className="prevBtn" variant="contained" color="primary" onClick={PrevPage} size="large" >Prev</Button>
                <Button variant="contained" color="primary"  onClick={SubmitForm} size="large" >Next</Button>
            </div>  
        </div>
		) 
}

export default StepFour