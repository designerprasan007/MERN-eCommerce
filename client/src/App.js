import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import adminLogin from './Components/Admin/adminLogin';
import Store from './Components/Admin/Store/Store';
const App = () =>{
  return(
    <Router>
        <Switch>
          <Route path="/admin" exact component={adminLogin} />
          <Route path="/addStore" exact component={Store} />
        </Switch>
      </Router>
    )
}

export default App