import axios from "axios";
import { SET_USER, SET_ERRORS, CLEAR_ERRORS } from "../type";

// Fungsi User ketika login
export const loginUser = (userData, history) => (dispatch) => {
  const api = "https://tasklogin.herokuapp.com/api/login";
  axios
    .post(api, userData)
    .then((res) => {
      setAuthorizationHeader(res.data.access_token);
    //   dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      history.push("/"); // untuk redirect ke tempat tujuan url
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

//Fungsi mau dapetin data2 user (biasanya buat user profile atau mau cantumin nama di headnav)
export const getUserData = () => (dispatch) => {
  axios
    .get("/user")
    .then((res) => {
      dispatch({
        type: SET_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const setAuthorizationHeader = (token) => {
  const blogToken = `Bearer ${token}`;
  localStorage.setItem("blogToken", blogToken);
  axios.defaults.headers.common["Authorization"] = blogToken; // code ini itu pengganti Authorization: Bearer token di postman
};
