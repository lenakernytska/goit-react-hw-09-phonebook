import React from "react";
import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu"
import styles from "./AppBar.module.css";
import { useSelector } from "react-redux";
import {getIsAuthenticated, isRefreshingUser} from "../../redux/auth/auth-selectors"




const AppBar = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);
     const isRefreshing = useSelector(isRefreshingUser);
    return (
        !isRefreshing && (<header className={styles.header}>
        <Navigation />
            {isAuthenticated
            ? <UserMenu />
            : <AuthNav />
            }
    </header>)
    )
}

export default AppBar;