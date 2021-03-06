
import {useState} from 'react';
import {Button} from '@material-ui/core'
import './StepForm.css'
import Editor from '../../Partials/Editor';

const StepThree = ({PrevPage, NextPage, productData, setProductData}) =>{
    const [reqError, SetReqError] = useState(false)

    const setdescription = (data) =>{
        setProductData({...productData, productSpeci:data})
    }

    const callNextPage = () =>{
        if(!productData.productSpeci)
        {
         SetReqError(true)
         return
        }
        NextPage();
    }

    return (
        <div className="container-fluid">
            <div className="row pt-5">
                <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                    <div className="shadow-lg formBG p-3 mb-5 bg-white rounded">
                        <h3 className="text-center">Product Description</h3>
                        <form className="container">
                            {reqError && <p className="text-danger">All Fields Required</p>}
                            <p>Product Specification and Details</p>
                            <div className="form-group py-3">
                                <Editor setdescription={setdescription} productData={productData} />
                                <div className="text-center pt-3">
                                    <Button className="prevBtn" variant="contained" color="primary" onClick={PrevPage} size="large" >Prev</Button>
                                    <Button variant="contained" color="primary"  onClick={() => callNextPage()} size="large" >Next</Button>
                                </div>
                            </div>
                        </form>      
                    </div>
                </div>    
            </div>
        </div>
        )
}

export default StepThree

