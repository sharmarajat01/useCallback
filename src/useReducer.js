// import { useReducer } from 'react';

export const commonReducer = (state, action) => {
    console.log('in reducer')
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1
        case 'reset':
            return 0
        default:
            return state
    }
}