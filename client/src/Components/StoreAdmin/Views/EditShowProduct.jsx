import { useState } from 'react';
import ReactHtmlParser	 from 'react-html-parser';
import {Button} from '@material-ui/core';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

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
    const ChangeCurrentImg = () =>{
        if(editAble === "false"){
            return true
        }
    }
    return(
        <>
        {
            productParams.process === 'delete' ?
                <>
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
                                        <p className="">Color: {img.color}</p>
                                        <p>Price: <span suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.price}</span></p>
                                        <p>Qty: <span suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.qty}</span></p>
                                        <p>Images</p>
                                        <div className="row">
                                            {img.images.map((src, key2) =>{
                                                return(
                                                    <div className="col py-3" key={key2}>
                                                        <img className="editshowImg img-fluid" src={ImgSrc+src} alt="" />
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