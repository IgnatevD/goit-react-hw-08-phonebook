/** @format */

import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppAll from "./components/AppAll";
import Container from "./components/Container";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { authOperations, authSelectors } from "./redux/auth";

const HomeView = lazy(() => import("./views/HomeView"));
const RegisterView = lazy(() => import("./views/RegisterView"));
const LoginView = lazy(() => import("./views/LoginView"));
const Contacts = lazy(() => import("./views/Contacts"));

export default function App() {
  // const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Загружаем... </h1>
      ) : (
        <>
          <AppAll />
          <Switch>
            <Suspense
              fallback={
                <div className="loader">
                  <div className="loader_inner"></div>
                </div>
              }
            >
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <Contacts />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
