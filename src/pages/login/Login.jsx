import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./login.css";

//Redux stuff
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberPassword: false,
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(20, "Maximum 20 characters")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      rememberPassword: Yup.string().required("Required!"),
    }),

    onSubmit: (values) => {
      dispatch(loginUser(values, history));
    },
  });

  //   const handleClick = () => {
  //     const newData = {
  //       username: username,
  //       password: password,
  //     };
  //     dispatch(loginUser(newData, history));
  //   };

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
      <form className="loginForm" onSubmit={formik.handleSubmit}>
        <label>Username</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.username}
          name="username"
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
        />
        <label>Password</label>
        <input
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
        />
        <label htmlFor="">Remember password</label>
        <input type="checkbox" value={formik.values.rememberPassword} />

        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Login;
