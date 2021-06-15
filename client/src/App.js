import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import adminLogin from './Components/Admin/adminLogin';
import MainView from './Components/Admin/MainView';
import AddStore from './Components/Admin/views/addStore'
// store related pages
import StoreLogin from './Components/StoreAdmin/StoreLogin'
const App = () =>{
  return(
    <Router>
        <Switch>
          <Route path="/adminlogin" exact component={adminLogin} />
          <Route path="/admin" exact component={MainView} />
          <Route path="/createStore" exact component={AddStore} />

          <Route path='/StoreLogin' exact component={StoreLogin} />
        </Switch>
      </Router>
    )
}

export default App