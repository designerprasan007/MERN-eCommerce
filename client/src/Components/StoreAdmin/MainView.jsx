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
	const [tabs, setTabs] = useState('Overview');

	const dispatch = useDispatch();

	const currentTab = (e) =>{
		setTabs(e.target.id);
		var x = document.getElementsByClassName("active");
		  [].forEach.call(x, function(el) {
		    el.classList.remove("active");
		  });
		e.target.parentElement.classList.add("active");
	}

	useEffect(() =>{
		dispatch(StoreDataFunc());
	}, [dispatch]);

	const StoreData = useSelector((state) => state.ProdutReducer);
	return (
		<div className="StoreHeroBody col-md-12">
			<Navbar />
			<div className="row">
				<div className="col-md-3">
					<SideNav currentTab={currentTab} />
				</div>
				<div className="col-md-9 heroMain">
					{tabs === 'Overview' && 
						<Overview StoreData={StoreData} />
					}
					{tabs === 'AddNewProduct' && 
						<AddProduct />
					}
					{tabs === 'AllProducts' && 
						<Allprooducts products={StoreData?.productData} />
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