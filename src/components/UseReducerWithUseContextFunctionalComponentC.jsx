import React, { useContext } from 'react'
import { CounterContext } from './ContextCounter'

function UseReducerWithUseContextFunctionalComponentC() {
    const counterContext = useContext(CounterContext)

    return (
        <>
            <div>From Component C Count - {counterContext.countState}</div>
            <button onClick={() => { counterContext.countDispatch('increment') }}>Increment Counter By Component C</button>
            <button onClick={() => { counterContext.countDispatch('decrement') }}>Increment Counter By Component C</button>
            <button onClick={() => { counterContext.countDispatch('reset') }}>Reset Counter By Component C</button>

        </>
    )
}

export default UseReducerWithUseContextFunctionalComponentC 