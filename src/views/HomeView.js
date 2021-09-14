/** @format */

import React from "react";
import img from "../img/tel-book.png";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    width: 600,
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <img src={img} alt="Телефонная книга" width="400" />
    <h1 style={styles.title}>
      Авторизируйся для создания собственной телефонной книги{" "}
    </h1>
  </div>
);

export default HomeView;
