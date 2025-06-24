import React, { useEffect, useState } from 'react'

function UseEffectConditionallyExecutedFunctionalComponent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        document.title = `Clicked ${count} times`
    }, [count])
    return (
        <>
            <h3>This is an example of how to execute useEffect conditionally in Functional Component</h3>
            <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={() => { setCount((prevCount) => prevCount + 1) }}>Clicked {count} Times</button>
        </>
    )
}

export default UseEffectConditionallyExecutedFunctionalComponent