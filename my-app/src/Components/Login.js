/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";
import "../Styles/Register.css";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  const alertState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(alertState.alert);

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    console.log({ ...loginData });
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:4000/api/user/login`, { ...loginData })
      .then(() => {
        setAlert({
          message: "You have successfully logged in!",
          isSuccess: true,
        });
      })
      .catch((err) => {
        setAlert({
          message: "Login failed.",
          isSuccess: false,
        });
      });
  };

  function loginHandleChange(event) {
    setLoginData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="titles">
      {alert.isSuccess && alert.message
        ? (
          <Alert
            message={alert.message}
            isSuccess={alert.isSuccess}
          />
        )
        : (
          <div>
            <Alert message={alert.message} isSuccess={alert.isSuccess} />
            <h1 className="titles">Login</h1>
            <h2 className="titles">Please submit your username and password</h2>
            <div>
              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter email address"
                  onChange={loginHandleChange}
                  required
                />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={loginHandleChange}
                  required
                />
                <div className="register-button">
                  <button
                    type="submit"
                    className="button"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
    </div>

  );
}

export default Login;
