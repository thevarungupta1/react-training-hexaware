import React, { Component } from 'react';

class Header extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                name: 'Updated Name'
            })
        }, 3000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('oldState').innerHTML = "Old State: "+ prevState.name;
    }

    componentDidUpdate(){
        document.getElementById('newState').innerHTML= "New State: "+ this.state.name;
    }

    render(){
        return(
            <div>
                <h1>Name: { this.state.name }</h1>
                <h2 id='oldState'></h2>
                <h2 id='newState'></h2>
            </div>
        )
    }
}
export default Header;