/* eslint-disable no-underscore-dangle */
import React, { useState, useContext } from "react";
import axios from "axios";
import Context from "../Utils/Context";
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

  const { setIsLoggedIn, setUserInfo } = useContext(Context);

  const [alert, setAlert] = useState(alertState.alert);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`https://dev-quiz-22.herokuapp.com/api/user/login`, { ...loginData })
      .then((res) => {
        setIsLoggedIn(true);
        setUserInfo({
          id: res.data._id,
          userName: res.data.userName,
          email: res.data.email,
          completedQuizzes: res.data.savedQuizzes,
        });
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

  return (
    <div className="titles">
      <div>
        <Alert message={alert.message} isSuccess={alert.isSuccess} />
        <div className="form-body">
          <h1 className="titles">Welcome!</h1>
          <h2 className="titles">Use the bar above to take a quiz.</h2>
          <h2 className="titles">If you login, you can save/view your scores.</h2>
          <h2 className="titles">To login, submit your email and password below.</h2>
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
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
}

export default Login;
