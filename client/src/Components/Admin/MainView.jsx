import {useDispatch, useSelector} from 'react-redux';
import {getPagedata} from '../../actions/adminActions';

import {useState, useEffect} from 'react';
import Navbar from './Commons/Navbar';
import SideNav from './Commons/SideNav';

import Allstore from './views/Allstore';
import Overview from './views/Overview';
import './Style.css'
const MainView = () =>{
    const [activeTab, setActiveTab] = useState(0);
	const dispatch = useDispatch();
	useEffect(() =>{
		dispatch(getPagedata())
	},[dispatch])
	
	const {pagedata} = useSelector((state) => state.PageData);
	// navbar tabs
	const tabs = ['Overview', 'Stores', 'Products', 'Daily', 'TodaySales'];


	return(
		<div className="mainBody">
			<Navbar />
			<div className="col-md-12">
				<div className="row no-gutters">
					<div className="col-md-3 SideNavBar">
						<SideNav activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>
					</div>
					<div className="col-md-9">
						{tabs[activeTab] === 'Overview' && 
							<Overview pagedata={pagedata} />
						}
						{tabs[activeTab] === 'Stores' && 
							<Allstore pagedata={pagedata} />
						}
						{tabs[activeTab] === 'Products' && 
							<h1>Products</h1>
						}
						{tabs[activeTab] === 'Daily' && 
							<h1>graph</h1>
						}
						{tabs[activeTab] === 'TodaySales' && 
							<h1>TodaySales</h1>
						}
					</div>
				</div>
			</div>
		</div>
		)
}

export default MainView;