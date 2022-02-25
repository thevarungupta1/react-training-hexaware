import React, { useState } from 'react';
import CounterButton from './CounterButton';
import CounterOutput from './CounterOutput';

const Counter = () => {

    let [count, setCount] = useState(0)

    function onIncrementHandler(){
        setCount(count++)
    }

    function onDecrementHandler(){
        setCount(count--)
    }

    return(
        <div className='text-center'>
         
            <CounterOutput data={ count } />
            <CounterButton incrementhandler={onIncrementHandler} decrementHandler={ onDecrementHandler } />
            
        </div>
    )
}
export default Counter;