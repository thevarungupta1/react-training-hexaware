import React, { Component } from "react";

class MultipleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }

  //   onNameChange = (event) => {
  //     this.setState({
  //       name: event.target.value,
  //     });
  //   };

  //   onEmailChange = (event) => {
  //     this.setState({
  //       email: event.target.value,
  //     });
  //   };

  onChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
      event.preventDefault()
      const isValid = this.validate();
      if(isValid){
          // valid input
          console.log(this.state)
      }      
  };

  validate = () => {
      if(!this.state.name){
        alert('name cannot be blank')
        return false;
      }
      if(!this.state.email.includes('@')){
          alert('invalid email');
          return false;
      }
      return true;
  }

  render() {
    return (
      <form method="post" onSubmit={this.onSubmitHandler}>
        <h1>
          {this.state.name}, {this.state.email}
        </h1>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={this.onChangeHandler}
            className="form-control"
            value={this.state.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            onChange={this.onChangeHandler}
            className="form-control"
            value={this.state.email}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  }
}
export default MultipleForm;
