import React, { useMemo, useState } from 'react'

function UseMemoExampleFunctionalComponent() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])


    return (
        <>
            <h3>This is an example of how to use useMemo to store corresponding value of the function in Functional Component</h3>
            <button onClick={() => { setCounterOne((prevCounterOne) => prevCounterOne + 1) }}>Increment Count One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'} </span>
            <button onClick={() => { setCounterTwo((prevCounterTwo) => prevCounterTwo + 1) }}>Increment Count Two - {counterTwo}</button>
        </>
    )
}

export default UseMemoExampleFunctionalComponent