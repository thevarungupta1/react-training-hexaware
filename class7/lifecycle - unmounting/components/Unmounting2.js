import React, { Component } from 'react';

class Child extends Component{
    
    componentWillUnmount(){
        alert('the component is about to be unmounted')
    }
    render(){
        return(
            <div>
                <h1>Hello from Child Component</h1>
            </div>
        )
    }
}
export default Child;