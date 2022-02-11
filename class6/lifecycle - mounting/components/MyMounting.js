import React, { Component } from 'react';

class MyMounting extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Watson'
            })
        }, 3000)
    }

    render(){
        return(
            <h1>Name: { this.state.name }</h1>
        )
    }
}

export default MyMounting;