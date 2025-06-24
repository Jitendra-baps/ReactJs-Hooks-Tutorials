// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useEffect, useState } from 'react'
// import { useReducer } from 'react';
import './App.css'
import CustomHookInputControlFunctionalComponent from './components/customHook/CustomHookInputControlFunctionalComponent'
// import CustomHookCounterFunctionalComponent from './components/CustomHookCounterFunctionalComponent'
// import CustomHookDocumentTitleCountFunctionalComponent from './components/CustomHookDocumentTitleCountFunctionalComponent'
// import CustomHookInputControlFunctionalComponent from './components/CustomHookInputControlFunctionalComponent'
// import UseRefIntervalIncrementalCounterFunctionalComponent from './components/UseRefIntervalIncrementalCounterFunctionalComponent'
// import UseCallbackExampleLayoutFunctionalComponent from './components/UseCallbackExampleLayoutFunctionalComponent'
// import UseMemoExampleFunctionalComponent from './components/UseMemoExampleFunctionalComponent'
// import UseReducerDataFetchingWithUseReducerFunctionalComponent from './components/UseReducerDataFetchingWithUseReducerFunctionalComponent'
// import UseRefInputFocusFunctionalComponent from './components/UseRefInputFocusFunctionalComponent'
// import UseRefIntervalIncrementalCounterWithoutUseRefClassComponent from './components/UseRefIntervalIncrementalCounterWithoutUseRefClassComponent'
// import { CounterProvider } from './components/ContextCounter';
// import UseReducerDataFetchingWithoutUseReducerFunctionalComponent from './components/UseReducerDataFetchingWithoutUseReducerFunctionalComponent';
// import UseReducerWithUseContextFunctionalComponentA from './components/UseReducerWithUseContextFunctionalComponentA';
// import IntervalCounterClassComponent from './components/IntervalCounterClassComponent'
// import ConditionalUpdateRenderClassComponent from './components/ConditionalUpdateRenderClassComponent'
// import MouseEventClassComponent from './components/MouseEventClassComponent'
// import UseEffectCleanUpFunctionalComponent from './components/UseEffectCleanUpFunctionalComponent'
// import UseEffectDependencyFunctionalComponent from './components/UseEffectDependencyFunctionalComponent'
// import UseEffectToFetchDataByIdFunctionalComponent from './components/UseEffectToFetchDataByIdFunctionalComponent'
// import UseEffectToFetchDataFunctionalComponent from './components/UseEffectToFetchDataFunctionalComponent'
// import UseEffectToFetchDataOnClickFunctionalComponent from './components/UseEffectToFetchDataOnClickFunctionalComponent'
// import axios from 'axios'
// import ContextExampleClassComponent from './components/ContextExampleClassComponent'
// import { UserListProvider } from './components/ContextUserList';
// import { PostListProvider } from './components/ContextPostList';
// import UseContextExampleFunctionalComponent from './components/UseContextExampleFunctionalComponent';
// import UseReducerCounterSimpleStateAndActionFunctionalComponent from './components/UseReducerCounterSimpleStateAndActionFunctionalComponent';
// import UseReducerCounterComplexStateAndActionFunctionalComponent from './components/UseReducerCounterComplexStateAndActionFunctionalComponentOne';
// import UseReducerCounterComplexStateAndActionFunctionalComponentTwo from './components/UseReducerCounterComplexStateAndActionFunctionalComponentTwo';
// import UseReducerMultipleUseReducerCounterFunctionalComponent from './components/UseReducerMultipleUseReducerCounterFunctionalComponent';
// import UseEffectConditionallyExecutedFunctionalComponent from './components/UseEffectConditionallyExecutedFunctionalComponent'
// import CounterClassComponent from './components/CounterClassComponent'
// import UseEffectCounterFunctionalComponent from './components/UseEffectCounterFunctionalComponent'
// import UseEffectOnlyOnceExecutedFunctionalComponent from './components/UseEffectOnlyOnceExecutedFunctionalComponent'
// import UseStateArrayFunctionalComponent from './components/UseStateArrayFunctionalComponent'
// import UseStateCounterFunctionalComponent from './components/UseStateCounterFunctionalComponent'
// import UseStateObjectFunctionalComponent from './components/UseStateObjectFunctionalComponent'


// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }
function App() {
  // const [count, setCount] = useState(0)
  // const [userList, setUserList] = useState([])
  // const [postList, setPostList] = useState([])

  // const [count, dispatch] = useReducer(reducer, initialState)

  // useEffect(() => {

  //   //get userList
  //   axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
  //     console.log(res?.data);
  //     setUserList(res?.data)
  //   }).catch((err) => {
  //     console.log(err);
  //   })

  // }, [])

  // useEffect(() => {
  //   //get postList
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
  //     console.log(res?.data);
  //     setPostList(res?.data)
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }, [])


  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <CounterClassComponent /> */}
      {/* <UseStateCounterFunctionalComponent />
      <UseStateObjectFunctionalComponent /> */}
      {/* <UseEffectCounterFunctionalComponent /> */}
      {/* <ConditionalUpdateRenderClassComponent /> */}
      {/* <UseEffectConditionallyExecutedFunctionalComponent /> */}
      {/* <UseStateArrayFunctionalComponent /> */}
      {/* <MouseEventClassComponent /> */}
      {/* <UseEffectOnlyOnceExecutedFunctionalComponent /> */}
      {/* <UseEffectCleanUpFunctionalComponent /> */}
      {/* <IntervalCounterClassComponent /> */}
      {/* <UseEffectDependencyFunctionalComponent /> */}
      {/* <UseEffectToFetchDataFunctionalComponent /> */}
      {/* <UseEffectToFetchDataByIdFunctionalComponent /> */}
      {/* <UseEffectToFetchDataOnClickFunctionalComponent /> */}
      {/* {userList?.length && postList?.length && (
        <UserListProvider value={userList}>
          <PostListProvider value={postList}>
            <ContextExampleClassComponent />
          </PostListProvider>
        </UserListProvider>
      )
      } */}
      {/* {userList?.length && postList?.length && (
        <UserListProvider value={userList}>
          <PostListProvider value={postList}>
            <UseContextExampleFunctionalComponent />
          </PostListProvider>
        </UserListProvider>
      )} */}
      {/* <UseReducerCounterSimpleStateAndActionFunctionalComponent /> */}
      {/* <UseReducerCounterComplexStateAndActionFunctionalComponent /> */}
      {/* <UseReducerCounterComplexStateAndActionFunctionalComponentTwo /> */}
      {/* <UseReducerMultipleUseReducerCounterFunctionalComponent /> */}
      {/* <CounterProvider value={{ countState: count, countDispatch: dispatch }}>
        <UseReducerWithUseContextFunctionalComponentA />
      </CounterProvider > */}
      {/* <UseReducerDataFetchingWithoutUseReducerFunctionalComponent /> */}
      {/* <UseReducerDataFetchingWithUseReducerFunctionalComponent /> */}
      {/* <UseCallbackExampleLayoutFunctionalComponent /> */}
      {/* <UseMemoExampleFunctionalComponent /> */}
      {/* <UseRefInputFocusFunctionalComponent /> */}
      {/* <UseRefIntervalIncrementalCounterWithoutUseRefClassComponent /> */}
      {/* <UseRefIntervalIncrementalCounterFunctionalComponent /> */}
      {/* <CustomHookDocumentTitleCountFunctionalComponent /> */}
      {/* <CustomHookCounterFunctionalComponent /> */}
      <CustomHookInputControlFunctionalComponent />
    </>
  )
}

export default App
