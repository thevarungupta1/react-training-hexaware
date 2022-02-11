import React, { Component } from 'react';

class Mounting extends Component{
    constructor(props){
        super(props)
        this.state = {
            color: 'red'
        }
    }

    static getDerivedStateFromProps(props, state){
        return {
            color: props.green
        }
    }

    render(){
        return(
            <h1>My Color: { this.state.color }</h1>
        )
    }
}
export default Mounting;