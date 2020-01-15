import React, { useReducer } from 'react';
import { commonReducer } from '../utils/hooks/useReducer';


const initialState = 0;

const reducer = commonReducer

function CounterOne() {
    console.log('in counter func.');
    const [count, dispatch] = useReducer(reducer, initialState)
    console.log('after dispatch');
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')} type='submit'>Increment</button>
            <button onClick={() => dispatch('decrement')} type='submit'>Decrement</button>
            <button onClick={() => dispatch('reset')} type='submit'>Reset</button>
        </div>
    )
}

export default CounterOne;