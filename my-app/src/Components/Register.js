import React, { useState } from "react";
import "../Styles/Register.css";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    password2: "",
  });

  const {
    userName, email, password, password2,
  } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="titles">
        <h1>Register</h1>
        <h2>Please create an account</h2>
      </div>
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input type="text" className="form-control" id="userName" name="userName" value={userName} placeholder="Enter username" onChange={onChange} />
          <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter email address" onChange={onChange} />
          <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} />
          <input type="password" className="form-control" id="password2" name="password2" value={password2} placeholder="Confirm password" onChange={onChange} />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
