import { combineReducers } from "redux";
import { createReducer } from '@reduxjs/toolkit';
import {
    fetchContactSuccess,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactSuccess,
    deleteContactRequest,
    deleteContactError,
    changeFilter,
    fetchContactRequest,
    fetchContactError
} from "./contacts-actions";

const items = createReducer([], {
    [fetchContactSuccess]:(state, {payload}) =>  payload,
    [addContactSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactSuccess]: (state, {payload})=>state.filter(contact=>contact.id !== payload)
})
    

const filter = createReducer('', {
    [changeFilter]: (state, { payload }) => payload,
});

const isLoading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: ()=>false,
})

export default combineReducers({
    items,
    filter,
    isLoading
})