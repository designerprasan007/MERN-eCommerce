import DataTable from 'react-data-table-component';

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
	return(
		<div className="pt-5">
		 <DataTable
	        title="Arnold Movies"
	        columns={columns}
	        data={data}
	      />
		</div>
		)
}

export default Allstore