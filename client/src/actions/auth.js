import axios from 'axios';
import {setAlert} from "./alert";
import {AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED} from "./types";
import setAuthToken from "../utils/setAuthToken";

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

    dispatch(loadUser())
  } catch (e) {
    dispatch({
      type: AUTH_ERROR
    })
  }
};


//Register User

export const register = ({name, email, password}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({name, email, password});

  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser())

  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    console.log(e.msg);

    dispatch({
      type: REGISTER_FAIL
    })
  }
};

//Login User

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({email, password});

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
    console.log(e);

    dispatch({
      type: LOGIN_FAILED
    })
  }
};
