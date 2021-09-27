import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

//Redux stuff
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    const newData = {
      username: username,
      password: password,
    };
    dispatch(loginUser(newData, history));
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  console.log("username", username);
  console.log("password", password);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleClick}>
        <label>Username</label>
        <input
          onChange={handleChangeUser}
          value={username}
          name="username"
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          onChange={handleChangePassword}
          value={password}
          password="password"
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Login;
