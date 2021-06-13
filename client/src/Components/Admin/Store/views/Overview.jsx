import './Style.css';

const Overview = () =>{
	return(
			<div className="row pt-5">
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Number of Stores</h3>
						<h5>10</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Number of Products</h3>
						<h5>10</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">New Applications</h3>
						<h5>10</h5>
					</div>
				</div>
				<div className="col-md-4">
					<div className="overviewContent shadow-lg p-3 mb-5 bg-white rounded text-center">
						<h3 className="pt-5">Today's Sales</h3>
						<h5>10</h5>
					</div>
				</div>
			</div>
		)
}

export default Overview