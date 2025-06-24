import React, { useEffect, useState } from 'react'

function UseEffectCounterFunctionalComponent() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1)
    }

    useEffect(() => {
        document.title = `Clicked ${count} Times`
    })

    return (
        <>
            <h3>This is an Example of counter using UseEffect in Functional Component </h3>
            <button onClick={incrementCount}>Clicked {count} Times</button>
        </>
    )
}

export default UseEffectCounterFunctionalComponent