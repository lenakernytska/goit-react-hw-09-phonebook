import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError
} from "./auth-actions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};


export const register = userData => dispatch => {
    dispatch(registerRequest());

    axios
    .post("/users/signup", userData)
      .then(({ data }) => {
        token.set(data.token);
        dispatch(registerSuccess(data));
    })
    .catch(error => dispatch( registerError(error.message)));
}


export const login = userData => dispatch => {
    dispatch(loginRequest());

  axios
    .post("/users/login", userData)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch(error => dispatch( loginError(error.message)));
}


export const logOut = () => dispatch => {
   dispatch(logoutRequest());

  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch(error => dispatch( logoutError(error.message)));
}


export const getCurrentUser = () => (dispatch, getState) => {
  const { auth: { token: persistedtoken }, } = getState();
  if (!persistedtoken) {
    return
  }
  token.set(persistedtoken);
  dispatch(getCurrentUserRequest());
  axios
    .get("/users/current")
    .then(({data}) => dispatch(getCurrentUserSuccess(data)))
  .catch((error)=> dispatch(getCurrentUserError(error.message)))
}