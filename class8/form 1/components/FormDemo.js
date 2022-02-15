import React, { Component } from 'react';

class FormDemo extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Guest'
        }
    }
    onChangeHandler = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }    
    render() {
        return(
            <form onSubmit={this.onSubmitHandler}>
                <h1>Name: {this.state.name}</h1>
                Enter Name: 
                <input type="text"
                name='username'
                onChange={ this.onChangeHandler } 
                value={ this.state.name }/>

                <input type="submit" value="submit" />
            </form>
        )
    }
}
export default FormDemo;