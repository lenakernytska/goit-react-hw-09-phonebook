import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import Filter from "../../components/Filter";
import { fetchContacts } from "../../redux/contacts/contacts-operations";
import styles from "./ContactView.module.css"



function ContactView() {

  const dispatch = useDispatch();

  useEffect(() => {
       dispatch(fetchContacts())
    }, [dispatch]);

   return (
    <div className={styles.wrapper}>
  <h1  className={styles.title}>Phonebook</h1>
       <ContactForm />
  <h2  className={styles.title}>Contacts</h2>
        <Filter/>
        <ContactList />
</div>
  )
}



export default ContactView;
