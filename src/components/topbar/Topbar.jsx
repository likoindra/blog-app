import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from '../../redux/actions/userActions'
import "./topbar.css";

import React from "react";

function Topbar() {
  const { authenticated } = useSelector((state) => state.user);
  const loggedIn = authenticated ? (
    <div className="topRight">
      <Link className="link" to="/settings">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </Link>
      <p> johndoe </p>
    </div>
  ) : (
    <div className="topRight">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/login">
            LOGIN
          </Link>
        </li>
        <li className="topListItem">
          <Link className="link" to="/register">
            REGISTER
          </Link>
        </li>
      </ul>
    </div>
  );

  const dispatch = useDispatch();
  const loggedOut = (() => {
    dispatch(Logout())
  })

  // const user = false;
  
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem" onClick={loggedOut}>LOGOUT</li>
        </ul>
      </div>
      { loggedIn }
    </div>
  );
}

export default Topbar;
