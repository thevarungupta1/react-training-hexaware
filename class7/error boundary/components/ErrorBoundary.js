import React, { Component } from 'react';

class ErrorBoundary extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        // it will update the state so the next render show the fallback UI
        return { hasError: true }
    }

    componentDidCatch(error, info){
        // it will catch error in any component below
        // we can also log the error to an error reposting service
        l
    }

    render(){
        if(this.state.hasError){
            return <div>Something is wrong</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;