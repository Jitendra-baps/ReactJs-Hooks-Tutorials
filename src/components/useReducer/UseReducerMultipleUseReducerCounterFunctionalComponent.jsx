import React, { useReducer } from 'react'
const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function UseReducerMultipleUseReducerCounterFunctionalComponent() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <>
            <h3>This is an example of how to use Multiple useReducer to maintain state in Functional Component</h3>
            <div>counter one - {count}</div>
            <div>counter two - {countTwo}</div>
            <button onClick={() => dispatch('increment')}>Increment Counter One</button>
            <button onClick={() => dispatch('decrement')}>Decrement Counter One</button>
            <button onClick={() => dispatch('reset')}>Reset Counter One</button>
            <div>
                <button onClick={() => dispatchTwo('increment')}>Increment Counter two</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement Counter Two</button>
                <button onClick={() => dispatchTwo('reset')}>Reset Counter Two</button>
            </div>
        </>
    )
}

export default UseReducerMultipleUseReducerCounterFunctionalComponent