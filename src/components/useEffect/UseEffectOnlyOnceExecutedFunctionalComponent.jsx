import React, { useEffect, useState } from 'react'

function UseEffectOnlyOnceExecutedFunctionalComponent() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('useEffect Executed');
        window.addEventListener('mouseover', logMousePosition)

        return () => {
            console.log('Component Unmounting code executed');
            window.removeEventListener('mouseover', logMousePosition)
        }
    }, [])

    const logMousePosition = (e) => {
        console.log('Mouseover Detected');
        setX(e.clientX);
        setY(e.clientY);
    }
    
    return (
        <>
            <h3>This is an example of how to execute useEffect only once in Functional Component</h3>
            <div> X - {x}  Y - {y}</div>
        </>
    )
}

export default UseEffectOnlyOnceExecutedFunctionalComponent