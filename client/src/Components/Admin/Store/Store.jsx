import {useState} from 'react';
import Navbar from './Navbar';
import AddStore from './addStore';
import Allstore from './Allstore'
const Products = () =>{
	const [showhideForm, setshowhideForm] = useState(false)

	const handleStore = () =>{
		setshowhideForm(showhideForm ? false : true)
	}

	return(
		<div className="container">
			<Navbar />
			<div className="pt-2">
				<button className="btn btn-primary" onClick={handleStore}> Add Store</button>
			</div>
			{showhideForm && <AddStore handleStore={handleStore} />}
			<Allstore />
		</div>
		)
}

export default Products;