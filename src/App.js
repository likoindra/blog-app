import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useEffect } from "react";
import axios from "axios";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { SET_AUTHENTICATED } from "./redux/type";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const currentUser = false

  useEffect(() => {
    store.dispatch({ type: SET_AUTHENTICATED });
  }, []);
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
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
