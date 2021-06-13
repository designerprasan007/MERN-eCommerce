import {useState} from 'react';
import DataTable from 'react-data-table-component';
import AddStore from './addStore';

const data = [{ num: 1, title: 'Conan the Barbarian', year: '1982' }];
const columns = [
   {
    name: '#',
    selector: 'num',
    sortable: true,
  },	
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];


const Allstore = () =>{
  const [showhideForm, setshowhideForm] = useState(false);


  const handleStore = () =>{
    setshowhideForm(showhideForm ? false : true)
  }

	return(
		<div>
    <div className="pt-2">
      <button className="btn btn-primary" onClick={handleStore}> Add Store</button>
    </div>
      {showhideForm && <AddStore handleStore={handleStore} />}
		 <DataTable
	        title="Arnold Movies"
	        columns={columns}
	        data={data}
	      />
		</div>
		)
}

export default Allstore