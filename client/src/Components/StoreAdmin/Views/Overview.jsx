import './Style.css';
const Overview = ({pagedata}) =>{
	return(
			<div className="row pt-5">
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Total Products</h3>
						<h5>{pagedata?.varifiedStoresCount}</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Total Orders</h3>
						<h5>10</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Total Sale</h3>
						<h5>{pagedata?.unverifiedStoresCount}</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Cancelled Orders</h3>
						<h5>10</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Total Transaction</h3>
						<h5>500000</h5>
					</div>
				</div>
			</div>
		)
}

export default Overview