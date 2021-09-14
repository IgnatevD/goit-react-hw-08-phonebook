/** @format */

import { useDispatch, useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import { authOperations, authSelectors } from "../redux/auth";
import { useEffect } from "react";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #2A363B",
  },
};

export default function AppAll() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
