/** @format */

// import { lazy, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { Switch, Route } from "react-router-dom";
// import AppAll from "./components/AppAll";
// // import HomeView from "./views/HomeView";
// // import RegisterView from "./views/RegisterView";
// // import LoginView from "./views/LoginView";
// import Container from "./components/Container";
// import { authOperations } from "./redux/auth";
// // import Contacts from "./views/Contacts";

// const HomeView = lazy(() => import("./views/HomeView"));
// const RegisterView = lazy(() => import("./views/RegisterView"));
// const LoginView = lazy(() => import("./views/LoginView"));
// const Contacts = lazy(() => import("./views/Contacts"));

// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(authOperations.fetchCurrentUser());
//   }, [dispatch]);

//   return (
//     <Container>
//       <AppAll />

//       <Switch>
//         <Route exact path="/" component={HomeView} />
//         <Route path="/register" component={RegisterView} />
//         <Route path="/login" component={LoginView} />
//         <Route path="/contacts" component={Contacts} />
//       </Switch>
//     </Container>
//   );
// }

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
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
                <div class="loader">
                  <div class="loader_inner"></div>
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
