import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./AuthNav.module.css"


const AuthNav = () => (
  <nav>
    <NavLink to="/register" exact className={styles.link} activeClassName={styles.activeLink}>
      Sign up
    </NavLink>

    <NavLink
      to="/login"
      exact
     className={styles.link}
     activeClassName={styles.activeLink}
    >
      Log in
    </NavLink>
  </nav>
);

export default AuthNav;