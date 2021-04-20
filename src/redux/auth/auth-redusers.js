import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
} from "./auth-actions"

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]:(_, { payload }) => payload
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logoutSuccess]:()=> null
});

const error = createReducer(null, {
    [registerError]: (_, { payload }) => payload,
    [loginError]: (_, { payload }) => payload,
    [logoutError]: (_, { payload }) => payload,
    [getCurrentUserError]:(_, { payload }) => payload
});

const isAuthenticated = createReducer(false, {
    [registerSuccess]: ()=>true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]:()=> true,
    [logoutSuccess]: () => false,
    [registerError]:  () => false,
    [loginError]:  () => false,
    [getCurrentUserError]: () => false,
})

const isLoading = createReducer(false, {
    [registerRequest]: () => true,
    [registerSuccess]: () => false,
    [registerError]: () => false,
    [loginRequest]: () => true,
    [loginSuccess]: () => false,
    [loginError]: () => false,
    [logoutRequest]: () => true,
    [logoutSuccess]: () => false,
    [logoutError]: () => false,
    [getCurrentUserRequest]:() => true,
    [getCurrentUserSuccess]: () => false,
    [getCurrentUserError]: () => false,
})

const isRefreshingUser = createReducer(false, {
    [getCurrentUserRequest]: () => true,
    [getCurrentUserSuccess]: () => false,
    [getCurrentUserError]: () => false,
})


export default combineReducers({
    user,
    isAuthenticated,
    token,
    error,
    isLoading,
    isRefreshingUser,
})