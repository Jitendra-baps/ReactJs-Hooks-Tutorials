import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementCounterOne':
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrementCounterOne':
            return { ...state, firstCounter: state.firstCounter - action.value };
        case 'incrementCounterTwo':
            return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrementCounterTwo':
            return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducerCounterComplexStateAndActionFunctionalComponentTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h3>This is an example of how to use useReducer to maintain state(complex state and action - initialState as object) in Functional Component</h3>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'incrementCounterOne', value: 1 })}>Increment Counter One By 1</button>
            <button onClick={() => dispatch({ type: 'decrementCounterOne', value: 1 })}>Decrement Counter One By 1</button>
            <button onClick={() => dispatch({ type: 'incrementCounterOne', value: 5 })}>Increment Counter One By 5</button>
            <button onClick={() => dispatch({ type: 'decrementCounterOne', value: 5 })}>Decrement Counter One By 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'incrementCounterTwo', value: 1 })}>Increment Counter Two By 1</button>
                <button onClick={() => dispatch({ type: 'decrementCounterTwo', value: 1 })}>Decrement Counter Two By 1</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </>
    )
}

export default UseReducerCounterComplexStateAndActionFunctionalComponentTwo