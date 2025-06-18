import React, { useEffect, useState } from 'react'

function UseEffectDependencyFunctionalComponent() {
    const [count, setCount] = useState

    useEffect(() => {
        this.interval = setInterval(tick, 200)
    }, [])

    const tick = () => {
        setCount((prevCount) => { prevCount + 1 })
    }

    return (
        <div>{count}</div>
    )
}

export default UseEffectDependencyFunctionalComponent