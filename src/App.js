import React, {useEffect, Suspense, lazy}from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch} from 'react-router-dom';
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import { getCurrentUser } from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute"
import { isRefreshingUser } from "./redux/auth/auth-selectors";


const HomeView = lazy(() => import('./views/HomeView/HomeView'/* webpackChunkName:'home-view'*/));
const RegisterView = lazy(() => import('./views/RegisterView'/* webpackChunkName:'register-view'*/));
const LoginView = lazy(() => import('./views/LoginView'/* webpackChunkName:'login-view'*/));
const ContactView = lazy(() => import('./views/ContactView/ContactView'/* webpackChunkName:'contacts-view'*/));


function App() {

  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingUser);

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);


  return (
      <Container>
      <AppBar />
      
    {!isRefreshing && <Suspense fallback={null}>
        <Switch>
        <PublicRoute exact path="/"><HomeView /></PublicRoute>
        <PublicRoute path="/register" restricted><RegisterView /></PublicRoute>
        <PublicRoute path="/login" restricted><LoginView/></PublicRoute>
        <PrivateRoute path="/contacts"><ContactView/></PrivateRoute>
        </Switch>
        </Suspense>}
      </Container>
    );
  }




export default App;
