import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import StoreTable from '../../Commons/StoreTable'
import {ManageStorefun} from '../../../actions/StoreAction';
const Allstore = () =>{
  const [currentTab, setCurrentTab] = useState('Allstores')

  const {pagedata} = useSelector((state) => state.PageData);

  const dispatch = useDispatch(); 

  const HandleReq = (e) =>{
    console.log(e.target.id, e.target.innerHTML);

    const data = {
      id: e.target.id,
      action:e.target.innerHTML
    }
    dispatch(ManageStorefun(data))
    
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
    cell:(row) => <button className={currentTab === 'Allstores' ? "btn btn-sm btn-danger" : "btn btn-sm btn-success" } id={row._id} onClick={HandleReq} >{currentTab === 'Allstores' ? 'Delete' : 'Accept'}</button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];



	return(
		<div className="pt-5">
  		<div className="py-3">
        <button className="btn btn-primary" onClick={() => setCurrentTab('Allstores') }>All Stores</button>
        <button className="btn btn-primary mx-2" onClick={() => setCurrentTab('Requsts') }>New Request</button>  
      </div>
      <StoreTable columns={columns} title={currentTab === 'Allstores' ? 'Allstores' : 'Request Stores'}  data={currentTab === 'Allstores' ? pagedata?.verified : pagedata?.unverified}/>
		</div>
		)
}

export default Allstore