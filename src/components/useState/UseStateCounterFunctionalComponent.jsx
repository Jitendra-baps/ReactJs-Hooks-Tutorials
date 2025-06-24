import React, { useState } from 'react'

function UseStateCounterFunctionalComponent() {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }
    return (
        <>
            <h3>This is an Example of counter using useState in Functional Component </h3>
            <button onClick={incrementCount}>Clicked {count} Times</button>
        </>
    )
}

export default UseStateCounterFunctionalComponent