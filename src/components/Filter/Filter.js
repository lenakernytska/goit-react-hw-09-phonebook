import React from "react";
import styles from './Filter.module.css';
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { useDispatch, useSelector } from "react-redux";
import {getFilter} from "../../redux/contacts/contacts-selectors"




export default function Filter  () {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onFilterContact = (event) => dispatch(changeFilter(event.target.value));
  
  return (  <label className={styles.label}>
          Find contacts by Name
          <input className={styles.input}
            type="text"
            value={value}
            onChange={onFilterContact}
          />
    </label>)
}

