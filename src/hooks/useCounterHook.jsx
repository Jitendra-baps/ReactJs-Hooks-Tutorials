import { useState } from "react";

function useCounterHook(initialCount = 0, incrementValue = 1, decrementValue = 1) {
    const [count, setCount] = useState(initialCount)
    const increment = () => { setCount((prevCount) => prevCount + incrementValue) }
    const decrement = () => { setCount((prevCount) => prevCount - decrementValue) }
    const reset = () => { setCount(initialCount) }
    return [count, increment, decrement, reset]
}

export default useCounterHook