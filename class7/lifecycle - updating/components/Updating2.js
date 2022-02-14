import React, { Component } from 'react';

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'Mark'
        }
    }

    shouldComponentUpdate(){
        return false;
    }

    onClickHandler = () => {
        console.log(this.state.name);
        this.setState({
            name: 'New Name'
        })
        
    }

    render(){
        
        console.log('updating ui...')
        return(
            <div>
                <h1>{ this.state.name }</h1>
                <button onClick={ this.onClickHandler }>Update</button>
            </div>
        )
    }
}
export default Header;