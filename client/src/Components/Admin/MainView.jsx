import {useDispatch, useSelector} from 'react-redux';
import {getPagedata} from '../../actions/adminActions';

import {useState, useEffect} from 'react';
import Navbar from './Commons/Navbar';
import SideNav from './Commons/SideNav';

import Allstore from './views/Allstore';
import Overview from './views/Overview';
import './Style.css'
const MainView = () =>{
	const [tabs, setTabs] = useState('Overview');

	const dispatch = useDispatch();

	useEffect(() =>{
		dispatch(getPagedata())
	},[dispatch])
	
	const {pagedata} = useSelector((state) => state.PageData);


	// navbar tabs
	const currentTab = (e) =>{
		setTabs(e.target.id);
		var x = document.getElementsByClassName("active");
		  [].forEach.call(x, function(el) {
		    el.classList.remove("active");
		  });
		e.target.parentElement.classList.add("active");
	}

	return(
		<div className="mainBody">
			<div className="container">
				<Navbar />
			</div>
			<div className="col-md-12">
				<div className="row no-gutters pt-3">
					<div className="col-md-3 SideNavBar">
						<SideNav  currentTab = {currentTab}/>
					</div>
					<div className="col-md-9">
						{tabs === 'Overview' && 
							<Overview pagedata={pagedata} />
						}
						{tabs === 'Stores' && 
							<Allstore pagedata={pagedata} />
						}
						{tabs === 'Products' && 
							<h1>Products</h1>
						}
						{tabs === 'Daily' && 
							<h1>graph</h1>
						}
						{tabs === 'TodaySales' && 
							<h1>TodaySales</h1>
						}
					</div>
				</div>
			</div>
		</div>
		)
}

export default MainView;