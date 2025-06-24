import React, { useState } from 'react'
import UseEffectOnlyOnceExecutedFunctionalComponent from './UseEffectOnlyOnceExecutedFunctionalComponent'

function UseEffectCleanUpFunctionalComponent() {
    const [isMouseLog, setMouseLog] = useState(false)

    return (
        <>
            <h3>This is an example of how to execute cleanup using useEffect in Functional Component</h3>
            <button onClick={() => setMouseLog(!isMouseLog)}>Toggle Mouse Log</button>
            {isMouseLog && <UseEffectOnlyOnceExecutedFunctionalComponent />}
        </>
    )
}

export default UseEffectCleanUpFunctionalComponent