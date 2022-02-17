import React, { useState, useEffect } from "react";
import axios from "axios";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    axios
      .post("http://apolis-grocery.herokuapp.com/api/auth/register", user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="wrapper">
      <h1>Register</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={onChangeHandler}
            className="form-control"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};
export default Register;
