import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactHtmlParser	 from 'react-html-parser';
import {Button} from '@material-ui/core';
import CreateTwoToneIcon from '@material-ui/icons/CreateTwoTone';
import {checkExtension} from '../../../Helpers/checkExtension';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Compress from "react-image-file-resizer";
import Editor from '../Partials/Editor';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import {EditProductFunc, DeleteProductFunc} from '../../../actions/ProductAction';
import './Style.css';
const  EditShowProduct = ({productParams, closeBtn, Modal, editshowdelete}) =>{
    let Product = productParams?.Product[0] ? productParams?.Product[0] : {}; 
    const dispatch = useDispatch(); 
    const [tempProClr, setTempProClr] = useState([]);
    const ImgSrc = process.env.REACT_APP_ImgSrc;
    const [editAble, setEditAble] = useState("false");
    const [editProduct, setEditProduct] = useState({productId: Product?._id, productName:'', productModel:'', productSpeci:''});
    const [editProClr, setEditProclr] = useState([])
    const HandleFiels = () =>{
        if(editAble === "false"){
            setEditAble("true");
        }else{
            setEditAble("false");
        }
    }
    const confirmDelete = async() =>{
        console.log('okay', Product._id)
        const id = Product._id;
        await dispatch(DeleteProductFunc(id))
    
    }
    const ChangeCurrentImg = (event) =>{
        if(editAble === "false"){
            return true
        }
        event.target.nextSibling.click()
    }
    const updateNewImg = (event) =>{
        const file = event.target.files[0]
        if(file) {
            var temparr = [...tempProClr]; 
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
                            keyId: parseInt(dataset.key),
                            objId: parseInt(dataset.obj),
                            fieldname: dataset.color
                        }
                        tempProClr.filter((img, index) =>{
                            if(img.keyId === dataset.key && img.objId === dataset.obj){
                                temparr.splice(index, 1);
                                setTempProClr(temparr);
                            }
                            return true
                        })
                        setTempProClr(prevState => [...prevState, newImgSet]);
                    },
                    "file"
                  );
            }
            else{
                toast.info("Use Valid Image... !")
                event.target.value = null;
            }
        }
    }
    const handleEditPriceQty = (event) =>{
        var temparr = [...editProClr]; 
        const keyname = event.target.dataset.value;
        const objkey = parseInt(event.target.dataset.obj)
        const textval = parseInt(event.target.innerText);
        let final = {
            keyname: keyname, 
            objkey:objkey,
            textval : textval
        };
        editProClr.filter((img, index) =>{
            if(img.keyname === keyname && img.objkey === objkey){
                temparr.splice(index, 1);
                setEditProclr(temparr);
            }
            return true
        })
        setEditProclr(prevState => [...prevState, final])
    }
    const setdescription = (data) =>{
        setEditProduct({...editProduct, productSpeci:data})
    }

    const CloseModal = () =>{
        HandleFiels();
        closeBtn();
    }
    const handleEditSubmit = async () =>{
        let formData = new FormData();
        tempProClr.map((img) =>(
			formData.append(img.fieldname, img.imgdata)
        ))
		formData.append('productName', editProduct.productName)
		formData.append('productModel', editProduct.productModel)
		formData.append('productSpeci', editProduct.productSpeci)
		formData.append('productId', editProduct.productId)
		formData.append('productColor', JSON.stringify(editProClr))
		formData.append('productimg', JSON.stringify(tempProClr))

        await dispatch(EditProductFunc(formData))
        CloseModal()
    }
    return(
        <>
        <Modal.Header>
            <Modal.Title>
                {editshowdelete.process === 'delete' ?  'Delete Product':'Edit/View Product'}
                <button className="editBtn btn btn-sm btn-warning me-3" onClick={CloseModal}><CloseRoundedIcon /></button>
                </Modal.Title>
        </Modal.Header>
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
                            <h3 className="pb-3">Product Id: {Product?.productId}</h3>
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
                                    <h5>{Product?.productBrand}</h5>

                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Catagory</h3>
                                    <h5>{Product?.productCata}</h5>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <h3>Product Description</h3>
                                    {editAble === "true" ? 
                                        <div className="editortext">
                                            {Product?.productSpeci !== '' ? <Editor setdescription={setdescription} editSpeci={Product?.productSpeci}/> : ''}
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
                                            <p><b>Price:</b> <span onKeyUp={(e) => handleEditPriceQty(e)} data-value="price" suppressContentEditableWarning="true" data-obj={key} className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.price}</span></p>
                                            <p><b>Qty:</b> <span onKeyUp={(e) => handleEditPriceQty(e)} data-value="qty" suppressContentEditableWarning="true" data-obj={key} className={editAble === "true" ? "editContent" : ""} contentEditable={editAble}>{img.qty}</span></p>
                                            <h3>Images</h3>
                                            <p className="">{editAble === "true" ? "Click Image to change" : ""}</p>
                                        </div>
                                        <div className="row">
                                            {img.images.map((src, key2) =>{
                                                return(
                                                    <div className="col py-3" key={key2}>
                                                        <img className="editshowImg img-fluid" onClick={ChangeCurrentImg} src={ImgSrc+src} alt="" />
                                                        <input type="file" hidden={true} onChange={updateNewImg} data-color={img.color} data-key={key2} data-obj={key} />
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