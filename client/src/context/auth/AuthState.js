import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';
import { REGISTER_FAIL, REGISTER_SUCCESS, CLEAR_ERRORS } from '../types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User
  // Register user
  const register = async formData => {
    const config = {
      Headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/users', formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  //Login user
  const login = () => console.log('login');
  //Logout
  const logout = () => console.log('logout');
  //Clear Errors
  const clearError = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        login,
        logout,
        clearError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
