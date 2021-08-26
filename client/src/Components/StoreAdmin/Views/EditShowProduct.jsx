import { useState, useEffect } from 'react';
import ReactHtmlParser	 from 'react-html-parser';
import {Button} from '@material-ui/core';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import {checkExtension} from '../../../Helpers/checkExtension';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Compress from "react-image-file-resizer";
import Editor from '../Partials/Editor';
import './Style.css';
const  EditShowProduct = ({productParams}) =>{
    let Product = productParams?.Product[0] ? productParams?.Product[0] : {}; 
    const [tempProClr, setTempProClr] = useState([]);
    const ImgSrc = process.env.REACT_APP_ImgSrc;
    const [editAble, setEditAble] = useState("false");
    const [editProduct, setEditProduct] = useState({productName:'', productModel:'', productCata:'', productSpeci:'', productBrand:''});
    const [editProClr, setEditProclr] = useState([])
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
        event.target.nextSibling.click()
    }
    useEffect(() => {
        console.log(tempProClr);
      }, [tempProClr]);

    const updateNewImg = (event) =>{
        const file = event.target.files[0]
        if(file) {
            const check = checkExtension(event.target.files[0])
            if(check){
                Compress.imageFileResizer(
                    file,
                    480,
                    480,
                    "JPEG",
                    70,
                    0,
                    (uri) => {
                        event.target.previousSibling.src = URL.createObjectURL(uri)
                        const {dataset} = event.target;
                        const newImgSet = {
                            src: URL.createObjectURL(uri),
                            imgdata: uri,
                            keyId: dataset.key,
                            objId: dataset.obj
                        }
                        setTempProClr(prevState => [...prevState, newImgSet]);
                    },
                    "file"
                  );
                // console.log(event.target.src, dataset.key,dataset.obj, event.target.dataset.key);
            }
            else{
                toast.info("Use Valid Image... !")
                event.target.value = null;
            }
        }
    }
    const setdescription = (data) =>{
        console.log(data);
        // setProductData({...productData, productSpeci:data})
    }
    const handleEditPriceQty = (event) =>{
        const keyname = event.target.dataset.value;
        const objkey = event.target.dataset.obj
        const textval = event.target.innerText;
        let final = {
            [keyname]: textval, 
            objkey:objkey
        };
        setEditProclr(prevState => [...prevState, final])
    }
    const handleEditSubmit = () =>{
        console.log(editProduct, editProClr, tempProClr);

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
                                    <h5 suppressContentEditableWarning="true" onKeyUp={(e) => setEditProduct({...editProduct,  productName:e.target.innerText})} className={editAble === "true" ? "editContent" : ""} data-value="productName" contentEditable={editAble}>{Product?.productName}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Model: </h3>
                                    <h5 suppressContentEditableWarning="true" onKeyUp={(e) => setEditProduct({...editProduct,  productModel:e.target.innerText})} className={editAble === "true" ? "editContent" : ""} data-value="productModel" contentEditable={editAble}>{Product?.productModel}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Brand</h3>
                                    <h5 suppressContentEditableWarning="true" onKeyUp={(e) => setEditProduct({...editProduct,  productBrand:e.target.innerText})} className={editAble === "true" ? "editContent" : ""} data-value="productBrand" contentEditable={editAble}>{Product?.productBrand}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Catagory</h3>
                                    <h5 suppressContentEditableWarning="true" onKeyUp={(e) => setEditProduct({...editProduct,  productCata:e.target.innerText})} className={editAble === "true" ? "editContent" : ""} data-value="productCata" contentEditable={editAble}>{Product?.productCata}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Description</h3>
                                    {editAble === "true" ? 
                                        <div className="editortext">
                                            <Editor setdescription={setdescription} editSpeci={Product?.productSpeci}/>
                                        </div> : 
                                        <div>
                                            { ReactHtmlParser(Product?.productSpeci) }
                                        </div>
                                    }
                                </div>
                            </div>
                            <h3>Product Colors and Details</h3>
                            {Product?.productColor?.map((img, key) =>{
                                return(
                                    <div key={key}>
                                        <div className="ProductDetail">
                                            <p className=""><b>Color:</b> {img.color}</p>
                                            <p><b>Price:</b> <span onKeyPress={(e) => handleEditPriceQty(e)} data-value="price" suppressContentEditableWarning="true" data-obj={key} className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.price}</span></p>
                                            <p><b>Qty:</b> <span onKeyPress={(e) => handleEditPriceQty(e)} data-value="qty" suppressContentEditableWarning="true" data-obj={key} className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.qty}</span></p>
                                            <h3>Images</h3>
                                            <p className="">{editAble === "true" ? "Click Image to change" : ""}</p>
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
                         {editAble === "true" ? <button className="btn btn-sm btn-success" onClick={handleEditSubmit} >Save</button> : ""}
                    </div>
                </>
            }
            
        </>
    )
}

export default EditShowProduct