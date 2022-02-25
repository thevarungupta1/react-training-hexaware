import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: 'increment' })
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement' })
    }

    return(
        <div className='text-center'>
            <h1>Counter:{ counter }</h1>
            <button onClick={ incrementHandler } className="btn btn-primary">Increment</button>
            <button onClick={ decrementHandler } className="btn btn-danger">Decrement</button>
        </div>
    )
}
export default Counter;