import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector(state => state.count)
    const handleIncrement = () =>{
           
    }
    const handleReset = () =>{

    }
    const handleDecrement = () =>{

    }

    return (
        <div>
            <h1>Welcome to redux</h1>
            <h3>Count: 0</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;