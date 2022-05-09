import axios from "axios";
import React, { useState } from "react";
import Alert from "./Alert";
import "../Styles/Register.css";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });

  const alertState = {
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [alert, setAlert] = useState(alertState.alert);

  const {
    userName, email, password, password2,
  } = formData;

  function addUser(event) {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post(`http://localhost:4000/api/user`, { ...formData })
      .then(() => {
        setAlert({
          message: "User has now been added!",
          isSuccess: true,
        });
      })
      .catch(() => {
        setAlert({
          message: "User already exists.",
          isSuccess: true,
        });
      });
  }

  function handleUserChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <>
      <div>
        <h1 className="titles">Register</h1>
        <h2 className="titles">Please create an account</h2>
      </div>
      <div>
        <form className="form" onSubmit={addUser}>
          <Alert message={alert.message} success={alert.isSuccess} />
          <input
            type="text"
            className="form-control"
            id="userName"
            name="userName"
            value={userName}
            placeholder="Enter username"
            onChange={handleUserChange}
          />
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter email address"
            onChange={handleUserChange}
          />
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter password"
            onChange={handleUserChange}
          />
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={handleUserChange}
          />
          <button type="submit" className="register-button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
