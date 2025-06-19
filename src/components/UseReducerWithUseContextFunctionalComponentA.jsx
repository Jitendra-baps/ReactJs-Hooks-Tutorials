import React, { useContext } from 'react'
import { CounterContext } from './ContextCounter'
import UseReducerWithUseContextFunctionalComponentB from './UseReducerWithUseContextFunctionalComponentB'

function UseReducerWithUseContextFunctionalComponentA() {
    const counterContext = useContext(CounterContext)
    return (
        <>
            <h3>This is an example of how to use useReducer with the useContext to provide count value and methods in Functional Component</h3>
            <div>From Component A Count - {counterContext.countState}</div>
            <button onClick={() => { counterContext.countDispatch('increment') }}>Increment Counter By Component A</button>
            <button onClick={() => { counterContext.countDispatch('decrement') }}>Decrement Counter By Component A</button>
            <button onClick={() => { counterContext.countDispatch('reset') }}>Reset Counter By Component A</button>
            <UseReducerWithUseContextFunctionalComponentB />
        </>
    )
}

export default UseReducerWithUseContextFunctionalComponentA