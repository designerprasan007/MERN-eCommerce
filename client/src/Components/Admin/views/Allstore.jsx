import {useSelector} from 'react-redux';
import StoreTable from '../../Commons/StoreTable'

const Allstore = () =>{

  const {pagedata} = useSelector((state) => state.PageData);

  const DeleteReq = (e) =>{
    console.log(e.target.id);
  }

  const AcceptReq = (e) =>{
    console.log(e.target.id);
  }

  const columns = [
  {
    name: 'storeName',
    selector: 'storeName',
    sortable: true,
  },
  {
    name: 'storeAddr',
    selector: 'storeAddr',
    sortable: true,
  },
  {
    name: 'ownerName',
    selector: 'ownerName',
    sortable: true,
  },
  {
    name: 'ownerEmail',
    selector: 'ownerEmail',
    sortable: true,
  },
  {
    name: 'ownerNum',
    selector: 'ownerNum',
    sortable: true,
  },
  {
    cell:(row) => <button className="btn btn-sm btn-danger" id={row._id} onClick={DeleteReq} >Delete</button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    cell:(row) => <button className="btn btn-sm btn-success" id={row._id} onClick={AcceptReq} >Accept</button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];



	return(
		<div className="pt-5">
  		<div className="py-3">
        <button className="btn btn-primary">All Stores</button>
        <button className="btn btn-primary mx-2">New Request</button>  
      </div>
      <StoreTable columns={columns} data={pagedata?.unverified}/>
		</div>
		)
}

export default Allstore