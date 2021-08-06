import DataTable from 'react-data-table-component';
import './tableStyle.css';
const StoreTable = ({columns, data, title}) =>{
  return(
    <div className="pt-5">
      <DataTable
            title={title}
            columns={columns}
            data={data}
            Clicked
            pagination
            dense
            striped={true}
            responsive={true}
          />
    </div>
    )
}

export default StoreTable