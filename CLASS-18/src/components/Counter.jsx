import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../feature/counter/counterSlice';

const Counter = () => {
    
    const count = useSelector((state)=> state.counter.value)
    
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=> dispatch(increment())}>Increment</button>
            <button onClick={()=> dispatch(decrement())}>Decrement</button>
            <button onClick={()=> dispatch(incrementByAmount(10))}>Increment by 5 value</button>
        </div>
    );
};

export default Counter;