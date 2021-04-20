import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import styles from "./Navigation.module.css";



const Navigation = () => {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (<nav>
    <NavLink to="/" exact className={styles.link} activeClassName={styles.activeLink}>
      Home
    </NavLink>

 { isLoggedIn &&  <NavLink
      to="/contacts"
      exact
     className={styles.link} activeClassName={styles.activeLink}
    >
      Contacts
    </NavLink>}
  </nav>)
}

  


export default Navigation;