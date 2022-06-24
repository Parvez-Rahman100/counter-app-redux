import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../CounterActions/CounterActions';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement = () =>{
        dispatch(incrementCounter())
    }
    const handleReset = () =>{
        dispatch(resetCounter())
        
    }
    const handleDecrement = () =>{
        dispatch(decrementCounter())
    }

    return (
        <div>
            <h2>Welcome to redux counter</h2>
            <h3>Count: {count}</h3>
            <button className='btn' onClick={handleIncrement}>++</button>
            <button className='btn' onClick={handleReset}>Reset</button>
            <button className='btn' onClick={handleDecrement}>--</button>
        </div>
    );
};

export default Counter;