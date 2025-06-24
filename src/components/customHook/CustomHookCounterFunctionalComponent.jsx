import React from 'react'
import useCounterHook from '../../hooks/useCounterHook'

function CustomHookCounterFunctionalComponent() {
    // const [count, setCount] = useState(10)

    // const increment = () => { setCount((prevCount) => prevCount + 1); console.log(count); }
    // const decrement = () => { setCount((prevCount) => prevCount - 1) }
    // const reset = () => { setCount(0) }
    const [counterOne, incrementCounterOne, decrementCounterOne, resetCounterOne] = useCounterHook()
    const [counterTwo, incrementCounterTwo, decrementCounterTwo, resetCounterTwo] = useCounterHook(10, 5, 2)
    return (
        <>
            <h3>This is an Example of Custom Hook for Counter Methods</h3>
            <div>Counter One - {counterOne}</div>
            <button onClick={incrementCounterOne}>Increment Counter One</button>
            <button onClick={decrementCounterOne}>Decrement Counter One</button>
            <button onClick={resetCounterOne}>Reset Counter One</button>
            <div>Counter Two - {counterTwo}</div>
            <button onClick={incrementCounterTwo}>Increment Counter One</button>
            <button onClick={decrementCounterTwo}>Decrement Counter One</button>
            <button onClick={resetCounterTwo}>Reset Counter One</button>
        </>
    )
}

export default CustomHookCounterFunctionalComponent