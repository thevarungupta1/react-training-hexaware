import React, { Component } from "react";

class Register extends Component {

    initialState= {
        nameError: '',
        emailError: ''
    }

  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state = {
      username: "",
      email: "",
      city: "",
      gender: "",
      subscribe: false,
    };
  }

  cities = ["Delhi", "Mumbai", "Pune"];

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate = () => {
      
      if(!this.state.name){
          this.setState({
              nameError: 'This is a required field'
          })

          return false;
      }
      
      return true;
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    if(this.validate()){
        // valid input
        console.log(this.state)
    }
  }

  render() {
    const { username, email, city, gender, subscribe } = this.state;
   
    return (
      <div>
        <h1>Register</h1>
        <h2>
          {username}, {email}, {city}, {gender}, {subscribe}
        </h2>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              value={username}
              onChange={this.onChangeHandler}
              name="username"
              className="form-control"
            />
            
            <small  className="text-danger">{ this.state.nameError }</small> 
          </div>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChangeHandler}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">City</label>
            <select
              name="city"
              value={city}
              onChange={this.onChangeHandler}
              className="form-control"
            >
              {this.cities.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="">Gender</label>
            <div className="form-check">
              <input
                onChange={this.onChangeHandler}
                type="radio"
                name="gender"
                className="form-check-input"
                value="Male"
              />
              <label htmlFor="" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={this.onChangeHandler}
                type="radio"
                name="gender"
                id=""
                className="form-check-input"
                value="Female"
              />
              <label htmlFor="" className="form-check-label">
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                onChange={this.onChangeHandler}
                type="checkbox"
                name="subscribe"
                className="form-check-input"
              />
              <label htmlFor="" className="form-check-label">
                Subscribe
              </label>
            </div>
          </div>
          <input type="submit" value="Register" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default Register;
