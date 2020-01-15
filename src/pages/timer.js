import React, { useState } from 'react';
import moment from 'moment';

const Timer = () => {
    const [timer, setTimer] = useState(3603);
    let currentCount = 0;

    if (timer > 0) {
        setInterval(() => {
            currentCount++;
            setTimer(timer - currentCount);
        }, 1000);

    }
    else return null;

    // if (timer === 0) {
    //     clearInterval(inter);
    //     setTimer(300);
    // }


    return <h3>{moment.utc(timer*1000).format('HH [Hours] mm [Minutes] ss [seconds]')} left.</h3>
}

export default Timer;