import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'incrementByOne':
      return state + 1;
    case 'decrementByOne':
      return state - 1;
    case 'incrementByFive':
      return state + 5;
    case 'decrementByFive':
      return state - 5;
    case 'reset':
      return initialState;
    default:
      return state
  }

}
function UseReducerCounterSimpleStateAndActionFunctionalComponent() {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h3>This is an example of how to use useReducer to maintain state(simple state and action) in Functional Component</h3>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('incrementByOne')}>Increment By 1</button>
      <button onClick={() => dispatch('decrementByOne')}>Decrement By 1</button>
      <button onClick={() => dispatch('incrementByFive')}>Increment By 5</button>
      <button onClick={() => dispatch('decrementByFive')}>Decrement By 5</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )
}

export default UseReducerCounterSimpleStateAndActionFunctionalComponent