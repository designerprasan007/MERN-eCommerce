import { useState } from 'react';
import ReactHtmlParser	 from 'react-html-parser';
import {Button} from '@material-ui/core';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';

import './Style.css';
const  EditShowProduct = ({productParams}) =>{
    const Product = productParams?.Product[0] ? productParams?.Product[0] : {}; 

    const ImgSrc = process.env.REACT_APP_ImgSrc;
    const [prevImages, setPrevImages] = useState({imgsrc: Object.values(Product).length >0 ? Product?.productColor[0]?.images : '', key:0});
	const [currentImg, setCurrentImg] = useState(Object.values(Product).length >0 ? ImgSrc+Product?.productColor[0]?.images[0] : '');
    const [editAble, setEditAble] = useState("false");
    const setImageView = (key) =>{
        console.log(key);
		setPrevImages({...prevImages, imgsrc:Product?.productColor[key]?.images, key:key})
		setCurrentImg(ImgSrc+Product?.productColor[key]?.images[0]);
	}
	const setCurrentimg = (src) =>{
		setCurrentImg(src);
	}
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
        console.log(prevImages, currentImg);
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
                        <Button className="editBtn" variant="contained" onClick={HandleFiels} color="primary">
                        <CreateTwoToneIcon />
                        </Button>}  
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="row g-0">
                                <div className="col-md-2 col-sm-3">
                                    {prevImages?.imgsrc?.map((viewImg, key) =>{
                                        return(
                                            <div key={key} className="py-2">
                                                <img src={ImgSrc+viewImg} alt="viewImg" onClick={(() => setCurrentimg(ImgSrc+viewImg))} className="mainPrevImgThumbnail" />
                                            </div>
                                            )
                                    })}
                                </div>
                                <div className="col-md-10 col-sm-9">
                                    <img src={currentImg} onClick={ChangeCurrentImg} className="img-fluid" alt="myimage" />
                                    <input type="file" hidden={true} id="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 text-start">
                            <h3>Product Name: </h3>
                            <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productName}</h5>
                            <h3>Product Model: </h3>
                            <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productModel}</h5>
                            <h3>Product Brand</h3>
                            <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productBrand}</h5>
                            <h3>Product Catagory</h3>
                            <h5 suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{Product?.productCata}</h5>
                            <h3>Product Description</h3>
                            <div>
                                { ReactHtmlParser(Product?.productSpeci) }
                            </div>
                            <h3>Product Colors and Details</h3>
                            {Product?.productColor?.map((img, key) =>{
                                return(
                                    <div key={key} className="prevImgDiv">
                                        <p className="prevImage" onClick={() => setImageView(key)}>{img.color}</p>
                                        <p>Price: <span suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.price}</span></p>
                                        <p>Qty: <span suppressContentEditableWarning="true" className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.qty}</span></p>

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