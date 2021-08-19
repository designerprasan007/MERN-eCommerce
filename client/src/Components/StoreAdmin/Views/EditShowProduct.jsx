import { useState } from 'react';
import ReactHtmlParser	 from 'react-html-parser';
import {Button} from '@material-ui/core';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import {checkExtension} from '../../../Helpers/checkExtension';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import './Style.css';
const  EditShowProduct = ({productParams}) =>{
    const Product = productParams?.Product[0] ? productParams?.Product[0] : {}; 

    const ImgSrc = process.env.REACT_APP_ImgSrc;
    const [editAble, setEditAble] = useState("false");

    const HandleFiels = () =>{
        if(editAble === "false"){
            setEditAble("true");
        }else{
            setEditAble("false");
        }
    }
    const confirmDelete = () =>{
        console.log('okay')
    }
    const ChangeCurrentImg = (event) =>{
        if(editAble === "false"){
            return true
        }
        // const {dataset} = event.target

        // console.log(event.target.src, dataset.key,dataset.obj, event.target.nextSibling);
        event.target.nextSibling.click()
    }
    const updateNewImg = (event) =>{
        if(event.target.files[0]) {
            const check = checkExtension(event.target.files[0])
            if(check){
               
            }
            else{
                toast.info("Use Valid Image... !")
                event.target.value = null;
            }
        }
        console.log(event.target.files[0])
    }
    return(
        <>
        {
            productParams.process === 'delete' ?
                <>
                <ToastContainer />
                <h1>You sure you want to delete?</h1> 
                <button className="btn btn-sm btn-danger" onClick={confirmDelete}>Delete</button>
                </>
                : 
                <>
                    {productParams.process === 'delete' ?  '':
                        <div className="text-end pb-3">
                            <Button className="" variant="contained" onClick={HandleFiels} color="primary">
                                <CreateTwoToneIcon />
                            </Button>    
                        </div>}  
                    <div className="container ps-5">
                        <div className="col-md-12 col-sm-12 text-start">
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Name: </h3>
                                    <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productName}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Model: </h3>
                                    <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productModel}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Brand</h3>
                                    <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productBrand}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Catagory</h3>
                                    <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productCata}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Description</h3>
                                    <div>
                                        { ReactHtmlParser(Product?.productSpeci) }
                                    </div>
                                </div>
                            </div>
                            <h3>Product Colors and Details</h3>
                            {Product?.productColor?.map((img, key) =>{
                                return(
                                    <div key={key}>
                                        <div className="ProductDetail">
                                            <p className=""><b>Color:</b> {img.color}</p>
                                            <p><b>Price:</b> <span suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.price}</span></p>
                                            <p><b>Qty:</b> <span suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.qty}</span></p>
                                            <h3>Images</h3>
                                            <p className="text-warning">{editAble === "true" ? "Click Image to change" : ""}</p>
                                        </div>
                                        <div className="row">
                                            {img.images.map((src, key2) =>{
                                                return(
                                                    <div className="col py-3" key={key2}>
                                                        <img className="editshowImg img-fluid" onClick={ChangeCurrentImg} src={ImgSrc+src} alt="" />
                                                        <input type="file" hidden={true} onChange={updateNewImg} data-key={key2} data-obj={key} />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <hr />
                                    </div>
                                    )
                            })}
                        </div>
                         {editAble === "true" ? <button className="btn btn-sm btn-success" >Save</button> : ""}
                    </div>
                </>
            }
            
        </>
    )
}

export default EditShowProduct