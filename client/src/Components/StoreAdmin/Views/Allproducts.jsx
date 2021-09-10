import{useState} from 'react'
import {useSelector} from 'react-redux'
import StoreTable from '../../Commons/StoreTable'
import { Modal } from 'react-bootstrap';
import EditShowProduct from './EditShowProduct';
const Allproducts = (products) => {
    const [editshowdelete, setEditShow] = useState({status:false, process:'', productId:'', Product:[]});
    const handleeditshowClose = () => setEditShow({status:false, process:'', productId:'', Product:[]});

    const Products = useSelector((state) => state.ProdutReducer.productData);

    const Product = products?.products;
    const columns = [
        {
          name: 'ProductId',
          selector: 'productId',
          sortable: true,
        },
        {
          name: 'ProductName',
          selector: 'productName',
          sortable: true,
        },
        {
          name: 'ProductBrand',
          selector: 'productBrand',
          sortable: true,
        },
        {
          name: 'Created',
          selector: 'created',
          sortable: true,
        },
        {
            cell:(row) => <button id={row._id + '-edit'} onClick={handleProduct} className="btn btn-sm btn-primary">Show / Edit</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
          {
            cell:(row) => <button id={row._id + '-delete'} onClick={handleProduct} className="btn btn-sm btn-danger">Delete</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
      ]
      const handleProduct = (ele) =>{
          let id = ele.target.id.split("-")[0]
          const Product = Products?.filter((product)=> product?._id === id);
          if(ele.target.id.endsWith('edit')){
            setEditShow({status:true, process:'show', productId:id, Product:Product})
          }else{
            setEditShow({status:true, process:'delete', productId:id, Product:Product})
          }
      }


    return (
        <div>
            <StoreTable columns={columns} title="Products"  data={Product}/>
            <Modal show={editshowdelete.status} onHide={handleeditshowClose}>
                <Modal.Body className="text-center">
                    <EditShowProduct Modal={Modal} productParams={editshowdelete} editshowdelete={editshowdelete} closeBtn={handleeditshowClose} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Allproducts