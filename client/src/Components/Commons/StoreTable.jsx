import DataTable from 'react-data-table-component';

const StoreTable = ({columns, data, handleChange}) =>{
  return(
    <div className="pt-5">
      <DataTable
            title="All Stores"
            columns={columns}
            data={data}
            selectableRows // add for checkbox selection
            Clicked
            pagination
            dense
          />
    </div>
    )
}

export default StoreTable