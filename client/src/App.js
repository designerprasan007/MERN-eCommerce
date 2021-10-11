import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'

import adminLogin from './Components/Admin/adminLogin';
import MainView from './Components/Admin/MainView';
import AddStore from './Components/Admin/views/addStore'
// store related pages
import StoreLogin from './Components/StoreAdmin/StoreLogin'
import mainStore from './Components/StoreAdmin/MainView'
// user related
import Home from './Components/Users/views/Home'
import Verifyemail from './Components/Users/views/Verifyemail';
import Shopping from './Components/Users/views/Shopping';
import ProductList from "./Components/Users/views/ProductList";
import SingleProduct from './Components/Users/views/SingleProduct';
import Cart from './Components/Users/views/Cart'

const App = () =>{
  const isAuthenticated = localStorage.getItem('Userinfo');
  const isAuth = isAuthenticated?.length > 1 ? true : false
  return(
    <Router>
        <Switch>
          <Route path="/adminlogin" exact component={adminLogin} />
          <Route path="/admin" exact component={MainView} />
          <Route path="/createStore" exact component={AddStore} />
          <ProtectedRoute path="/storeOwner" Component={mainStore} isAuth={isAuth} />
          <Route path='/' exact component={StoreLogin} />
          <Route path="/userpage" exact component={Home} />
          <Route path="/verifyemail" exact component={Verifyemail} />
          <Route path="/shopping" exact component={Shopping} />
          <Route path="/productList" exact component={ProductList} />
          <Route path="/product" exact component={SingleProduct} />
          <Route path="/mycart" exact component={Cart} />

        </Switch>

      </Router>
    )
}

export default App