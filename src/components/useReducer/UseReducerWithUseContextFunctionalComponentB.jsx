import React, { useContext } from 'react'
import UseReducerWithUseContextFunctionalComponentC from './UseReducerWithUseContextFunctionalComponentC'
import { CounterContext } from '../../context/ContextCounter'

function UseReducerWithUseContextFunctionalComponentB() {
    const counterContext = useContext(CounterContext)
    return (
        <>
            <div>From Component B Count - {counterContext.countState}</div>
            <button onClick={() => { counterContext.countDispatch('increment') }}>Increment Counter By Component B</button>
            <button onClick={() => { counterContext.countDispatch('decrement') }}>Decrement Counter By Component B</button>
            <button onClick={() => { counterContext.countDispatch('reset') }}>Reset Counter By Component B</button>
            <UseReducerWithUseContextFunctionalComponentC />
        </>
    )
}

export default UseReducerWithUseContextFunctionalComponentB