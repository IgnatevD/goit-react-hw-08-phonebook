/** @format */

import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

const styles = {
  div: {
    textAlign: "center",
  },
  form: {
    width: 520,
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
    textAlign: "left",
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div style={styles.div}>
      <h1>Войти в телефонную книгу</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className="button">
          Войти
        </button>
      </form>
    </div>
  );
}
