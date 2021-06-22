import {useState} from 'react';
import './Style.css'
import Navbar from './Commons/Navbar';
import SideNav from './Commons/SideNav'
import Overview from './Views/Overview'
import AddProduct from './Views/AddProduct'
const MainView = () =>{
	const [tabs, setTabs] = useState('Overview');

	const currentTab = (e) =>{
		setTabs(e.target.id);
		var x = document.getElementsByClassName("active");
		  [].forEach.call(x, function(el) {
		    el.classList.remove("active");
		  });
		e.target.parentElement.classList.add("active");
	}


	return (
		<div className="StoreHeroBody col-md-12">
			<Navbar />
			<div className="row">
				<div className="col-md-3">
					<SideNav currentTab={currentTab} />
				</div>
				<div className="col-md-9">
					{tabs === 'Overview' && 
						<Overview />
					}
					{tabs === 'AddNewProduct' && 
						<AddProduct />
					}
					{tabs === 'AllProducts' && 
						<h1>Products</h1>
					}
					{tabs === 'TodayGraph' && 
						<h1>graph</h1>
					}
					{tabs === 'TodaySales' && 
						<h1>TodaySales</h1>
					}
				</div>
			</div>
		</div>
		)
}

export default MainView