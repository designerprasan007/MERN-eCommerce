import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {StoreDataFunc} from '../../actions/StoreAction';
import './Style.css'
import Navbar from './Commons/Navbar';
import SideNav from './Commons/SideNav'
import Overview from './Views/Overview'
import AddProduct from './Views/AddProduct';
import Allprooducts from './Views/Allproducts';
const MainView = () =>{
    const [activeTab, setActiveTab] = useState(0);

	const dispatch = useDispatch();
	const tabs = ['Overview', 'AddNewProduct', 'AllProducts', 'TodayGraph', 'TodaySales'];


	useEffect(() =>{
		dispatch(StoreDataFunc());
	}, [dispatch]);

	const StoreData = useSelector((state) => state.ProdutReducer);
	return (
		<div className="StoreHeroBody col-md-12">
			<Navbar />
			<div className="row">
				<div className="col-md-3">
				<SideNav activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>
				</div>
				<div className="col-md-9 heroMain">
					{tabs[activeTab] === 'Overview' && 
						<Overview StoreData={StoreData} />
					}
					{tabs[activeTab] === 'AddNewProduct' && 
						<AddProduct />
					}
					{tabs[activeTab] === 'AllProducts' && 
						<Allprooducts products={StoreData?.productData} />
					}
					{tabs[activeTab] === 'TodayGraph' && 
						<h1>graph</h1>
					}
					{tabs[activeTab] === 'TodaySales' && 
						<h1>TodaySales</h1>
					}
				</div>
			</div>
		</div>
		)
}

export default MainView