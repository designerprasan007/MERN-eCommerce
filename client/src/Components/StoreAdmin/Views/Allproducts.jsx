import{useState} from 'react'
import StoreTable from '../../Commons/StoreTable'
import { Modal } from 'react-bootstrap';
import EditShowProduct from './EditShowProduct';
const Allproducts = (products) => {
    const [editshowdelete, setEditShow] = useState({status:false, process:'', productId:''});
    const handleeditshowClose = () => setEditShow({status:false, process:''});

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
            cell:(row) => <button id={row._id + '-show'} onClick={handleProduct} className="btn btn-sm btn-success">Show</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
        {
            cell:(row) => <button id={row._id + '-edit'} onClick={handleProduct} className="btn btn-sm btn-primary">Edit</button>,
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
          if(ele.target.id.endsWith('edit')){
            setEditShow({status:true, process:'edit', productId:id})
          }else if(ele.target.id.endsWith('show')){
            setEditShow({status:true, process:'show', productId:id})
          }else{
            setEditShow({status:true, process:'delete', productId:id})
          }
      }

      const confirmDelete = () =>{
          console.log('okay')
      }

    return (
        <div>
            <StoreTable columns={columns} title="Products"  data={Product}/>
            <Modal show={editshowdelete.status} onHide={handleeditshowClose}>
                <Modal.Header>
                    <Modal.Title>{editshowdelete.process === 'delete' ?  'Delete Product':'Edit/View Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <EditShowProduct productParams={editshowdelete} />
                    <button className="btn btn-sm btn-success me-3" onClick={handleeditshowClose}>Close</button>
                    {editshowdelete.process === 'edit' || editshowdelete.process === 'delete' ? <button className="btn btn-sm btn-danger" onClick={confirmDelete}>{editshowdelete.process === 'delete' ? 'Delete' : 'Edit'}</button> : ''}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Allproducts