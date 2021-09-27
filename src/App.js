import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

//Redux
import {Provider} from 'react-redux';  
import store from './redux/store';



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const currentUser = false;
  return (
    <Provider store={store}>
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          <Register/>
          {/* {currentUser ? <Homepage /> : <Register />} */}
        </Route>
        <Route path="/login"> <Login/> </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
