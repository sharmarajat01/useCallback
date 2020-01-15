import React, { useState, useCallback } from 'react';

// Keeps track of all created functions during the app's life 
const functions = new Set();

const Demo = () => {
    const [delta, setDelta] = useState(1);
    const [c, setC] = useState(0);

    const incrementDelta = useCallback(() => setDelta(delta => delta + 1), []);
    const increment = useCallback(() => setC(c => c + delta),[delta]);

    // Register the functions so we can count them
    functions.add(incrementDelta);
    functions.add(increment);

    return (<div>
        <div> Delta is {delta} </div>
        <div> Counter is {c} </div>
        <br />
        <div>
            <input type='button' onClick={incrementDelta} value="Increment Delta" />
            <input type='button' onClick={increment} value='Increment Counter' />
        </div>
        <br />
        <div> Newly Created Functions: {functions.size - 2} </div>
    </div>)
}

export default Demo;