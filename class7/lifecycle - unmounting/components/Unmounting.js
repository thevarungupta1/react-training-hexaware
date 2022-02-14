import React, { Component } from 'react';
import Child from './Unmounting2';

class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            display: true
        }
    }
    onClickHandler = () => {
        this.setState({
            display: false
        })
    }

    render(){
        let myComponent;
        if(this.state.display){
            myComponent = <Child />
        }
        return(
            <div>
                { myComponent }
                <button onClick={ this.onClickHandler }>Remove Component</button>
            </div>
        )
    }
}
export default Parent;
