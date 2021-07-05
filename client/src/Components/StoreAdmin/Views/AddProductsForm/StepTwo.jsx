import {useState} from 'react';
import {TextField, Button} from '@material-ui/core'
import './StepForm.css'
const StepTwo = ({PrevPage, NextPage, productData, setProductData}) =>{
        const [reqError, SetReqError] = useState(false)
        const callNextPage = () =>{
            if(!productData.productColor || !productData.productPrice || !productData.productQty)
            {
                SetReqError(true)
                return
            }
                console.log(productData);
            NextPage();
    }
    const handlePrice = (key, event) =>{
        let price = event.target.value;
        console.log(key, price);
        
        // setProductData({...productData, ProVal:{price:price}});
        // console.log(productData);
    }

    const handleQty = (val) =>{
        console.log(val);
    }
    return (
        <div className="container-fluid">
            <div className="row pt-5">
                <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <h3 className="text-center">Add Image</h3>
                        {reqError && <p className="text-danger">All Fields Required</p>}
                        <form className="container">
                             {productData.productColor.map((clr,key) =>{
                                return (
                                    <div key={key}>
                                    <p className="pt-3 ">{clr.value}</p>
                                    <div className="form-group">
                                        <TextField label="Price" value={productData?.ProVal?.price || ''} onChange={(event) => handlePrice(key, event)} type="number" fullWidth required />
                                    </div>
                                    <div className="form-group pt-3">
                                        <TextField label="Quantity" value={clr || ''} onChange={(event) => handleQty(key, event)} type="number" fullWidth required />
                                    </div>
                                    </div>
                                    )
                                }
                             )}

                           
                            <div className="text-center pt-3">
                                <Button className="prevBtn" variant="contained" color="primary" onClick={PrevPage} size="large" >Prev</Button>
                                <Button variant="contained" color="primary"  onClick={() => callNextPage()} size="large" >Next</Button>
                            </div>    
                        </form>
                    </div>      
                </div>
            </div>  
        </div>
        )
}

export default StepTwo