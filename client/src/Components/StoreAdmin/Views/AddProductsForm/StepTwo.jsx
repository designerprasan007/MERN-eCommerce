import {useState} from 'react';
import {TextField, Button} from '@material-ui/core';
import {checkExtension} from '../../../../Helpers/checkExtension';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './StepForm.css'
const StepTwo = ({PrevPage, NextPage, productData, proClrData, setProClrData, setProductData}) =>{
        const [reqError, SetReqError] = useState(false);
        const [imgError, SetimgError] = useState(false);

        const callNextPage = () =>{
            if(!proClrData[0].price || !proClrData[0].qty || proClrData[0].images.src === '')
            {
                SetReqError(true)
                return
            }
            NextPage();
    }
    const handleCount = (key, event) =>{
        const values = [...proClrData]
        const num = parseInt(event.target.value) 
        values[key][event.target.name] = num
        setProClrData(values);
    }

    const handleImage = (key,imgkey, event) =>{
        if(event.target.files[0]) {
            const check = checkExtension(event.target.files[0])
            if(check){
                proClrData[key].images[imgkey].src = URL.createObjectURL(event.target.files[0]);
                proClrData[key].images[imgkey].imgdata =event.target.files[0];
            }
            else{
                SetimgError(true);
                event.target.value = null;
            }
            console.log(proClrData)
        }
    }

    const CallPrevPage = () =>{
        setProductData({...productData, productColor:[], productBrand:'', productCata:''})
        setProClrData([]);
        PrevPage();
    }
    const addImages = (key) =>{
        var obj = {src:'',imgdata:''};
        proClrData.images = proClrData[key].images.push(obj);
        setProClrData(proClrData)
    }
    console.log(proClrData)
    return (
        <div className="container-fluid">
            <div className="row pt-5">
                <div className="col-md-8 offset-md-2 col-sm-8 offset-sm-2">
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                        <h3 className="text-center">Add Image</h3>
                        {reqError && <p className="text-danger">All Fields Required</p>}
                        {imgError && <p className="text-danger">Please use valid Image</p>}

                        <form className="container">
                             {proClrData.length >= 1 && proClrData?.map((clr,key) =>{
                                return (
                                    <div key={key}>
                                        <p className="pt-3 ">{clr.color}</p>
                                        <div className="form-group">
                                            <TextField label="Price" name="price" value={clr?.price} onChange={(event) => handleCount(key, event)} type="number" fullWidth required />
                                        </div>
                                        <div className="form-group pt-3">
                                            <TextField label="Quantity" name="qty" value={clr?.qty} onChange={(event) => handleCount(key, event)} type="number" fullWidth required />
                                        </div>
                                        <div className="text-end pt-3">
                                            <Button variant="contained" color="primary" onClick={() => addImages(key)}><AddCircleOutlineIcon />Add Images</Button>
                                        </div>
                                        {clr?.images?.map((img, imgkey) =>{
                                           return ( <div className="form-group pt-3" key={imgkey}>
                                                        <TextField label="Image" name="images" value="" onChange={(event) => handleImage(key, imgkey, event)} accept="image/*"  type="file" fullWidth required />
                                                    </div>)
                                        })}
                                    </div>
                                    )
                                }
                             )}

                           
                            <div className="text-center pt-3">
                                <Button className="prevBtn" variant="contained" color="secondary" onClick={() => CallPrevPage()} size="large" >Prev</Button>
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