import React from "react";
import styles from './ContactList.module.css';
import { deleteContact } from "../../redux/contacts/contacts-operations";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  margin: {
        margin: 0,
      padding: 0,
  },
  extendedIcon: {
    marginRight: 0,
  },
}));


export default function ContactList  () {
    const contacts = useSelector(getVisibleContacts);

    const dispatch = useDispatch();

    const classes = useStyles();

    const onDeleteContact = id => dispatch(deleteContact(id));
    
    return (
        <ul className={styles.list}>
        {
            contacts.map(({ id, name, number }) => (
                <li
                    className={styles.item}
                    key={id}
                >{name}: {number}
                    <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        type="button"
                        onClick={() => onDeleteContact(id)}>
                   <DeleteIcon />
                  </IconButton>
                </li>
            ))
        }
    </ul>
    )
    
}

