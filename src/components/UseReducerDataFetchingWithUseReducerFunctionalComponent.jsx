import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

const initialState = {
  isLoading: true,
  postData: {},
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'data_fetch_successfully':
      return { isLoading: false, postData: action?.postData, error: '' }
    case 'data_fetch_error':
      return { isLoading: false, postData: {}, error: 'Something Went Wrong Please Check' }
    default:
      return state
  }
}

function UseReducerDataFetchingWithUseReducerFunctionalComponent() {
  const [postApiCallState, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        console.log(res);
        dispatch({ type: 'data_fetch_successfully', postData: res?.data })
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: 'data_fetch_error' })
      })
  }, [])

  return (
    <>
      <h3>This is an example of how to data fetch using useReducer in Functional Component</h3>
      {postApiCallState?.isLoading ? (<h5>Loading...</h5>) : (postApiCallState?.error ? (<h5>{postApiCallState?.error}</h5>) : (<li> {postApiCallState?.postData?.title}</li>))}
    </>
  )
}

export default UseReducerDataFetchingWithUseReducerFunctionalComponent