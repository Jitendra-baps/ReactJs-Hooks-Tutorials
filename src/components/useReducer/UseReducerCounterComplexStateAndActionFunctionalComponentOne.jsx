import React, { useReducer } from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + action.value;
        case 'decrement':
            return state - action.value;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducerCounterComplexStateAndActionFunctionalComponent() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h3>This is an example of how to use useReducer to maintain state(Complex state and action - action as object) in Functional Component</h3>
            <div>Count - {count}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment By 1</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement By 1</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment By 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement By 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </>
    )
}

export default UseReducerCounterComplexStateAndActionFunctionalComponent