import React, { useState, useCallback } from 'react'
const Home = (props) => {

    const [values, setValues] = useState(); 

    const submitSong = useCallback(() =>
        handleClick(), [values])

    const handleClick = () => {
        setValues(' updated set values in handle click.')
        console.log('in handle click.', values)
    }

    return (
        <div>
            <input type='file' name='file' accept='.mp3' onChange={() => console.log('on chnge done.')} />
            <button type='submit' className='primary bold' onClick={submitSong}>Send</button>
        </div>
    )
}

export default Home;