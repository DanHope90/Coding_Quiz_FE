/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = async (event) => {
    // eslint-disable-next-line no-console
    // console.log({ ...loginData });
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:4000/api/user/login`, { ...loginData })
      .then((res) => {
        setAlert({
          message: "You have successfully logged in!",
          isSuccess: true,
        });
        console.log(res.data);
      })
      .catch(() => {
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

  const navigate = useNavigate();
  function handleClick() {
    if (alert.isSuccess) {
      navigate('/');
    }
  }

  return (
    <div className="titles">
      {loggedIn
        ? (
          { handleClick }
        )
        : (
          <div>
            <Alert message={alert.message} isSuccess={alert.isSuccess} />
            <div className="form-body">
              <h1 className="titles">Login</h1>
              <h2 className="titles">Please submit your username and password</h2>
            </div>
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
                <div>
                  <button
                    type="submit"
                    className="register-button"
                    onClick={handleClick}
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
