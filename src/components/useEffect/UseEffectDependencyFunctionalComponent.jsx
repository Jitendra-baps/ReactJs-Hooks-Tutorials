import React, { useEffect, useState } from 'react'

function UseEffectDependencyFunctionalComponent() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const tick = () => {
            setCount((prevCount) => prevCount + 1)
        }
        const interval = setInterval(tick, 200)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h3>This is an Example to showcase how dependency work in useEffect</h3>
            <div>{count}</div>
        </>
    )
}

export default UseEffectDependencyFunctionalComponent