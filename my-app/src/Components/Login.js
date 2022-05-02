import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
      <div>
        <h1>Login</h1>
        <h2>Please submit your username and password</h2>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter email address" onChange={onChange} />
          <input type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter password" onChange={onChange} />
          <button type="submit" className="button">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
