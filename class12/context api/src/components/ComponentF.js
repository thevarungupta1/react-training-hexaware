import React, { Component } from 'react';
import { UserConsume } from './userContext';

class ComponentF extends Component{
    render(){
        return(
            <UserConsume>
                {
                    (username) => {
                        return <h1>Hello, { username }</h1>
                    }
                }
            </UserConsume>

        )
    }
}
export default ComponentF;