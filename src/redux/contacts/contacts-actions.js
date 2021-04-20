import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction("contscts/fetchContactRequest");
const fetchContactSuccess = createAction("contscts/fetchContactSuccess");
const fetchContactError = createAction("contscts/fetchContactError");

const addContactRequest = createAction("contscts/addContactRequest");
const addContactSuccess = createAction("contscts/addContactSuccess");
const addContactError = createAction("contscts/addContactError");


const deleteContactRequest = createAction("contscts/deleteContactRequest");
const deleteContactSuccess = createAction("contscts/deleteContactSuccess");
const deleteContactError = createAction("contscts/deleteContactError");

const changeFilter = createAction("contacts/changeFilter");

export {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    changeFilter,
};