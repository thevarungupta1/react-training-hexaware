import React, { useState } from "react";

const Register = () => {
  const [errors, setErrors] = useState({
    usernameError: "",
    emailError: "",
    phoneError: "",
  });
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  function onChangeHandler(event) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function onSubmitHandler(event){
    event.preventDefault()
    if(validate()){

        console.log(user)
    }
  }

  function validate(){
      if(user.username == ''){
          setErrors({
              usernameError: 'Username is required'
          })
          return false
      }
      return true;
  }

  return (
    <div>
      <h1>Register</h1>
      <h2>
        {user.username}, {user.email}, {user.phone}
      </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={onChangeHandler}
            className="form-control"
          />
          <small className="text-danger">{ errors.usernameError }</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            formNoValidate            
            name="email"
            onChange={onChangeHandler}
            value={user.email}
            className="form-control"
          />
          <small className="text-danger">{ errors.emailError }</small>
        </div>
        <div className="form-group">
          <label htmlFor="">Phone</label>
          <input
            type="text"
            name="phone"
            onChange={onChangeHandler}
            value={user.phone}
            className="form-control"
          />
          <small className="text-danger">{ errors.phoneError }</small>
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Register;
