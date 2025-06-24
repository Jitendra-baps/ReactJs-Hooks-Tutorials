import React, { useEffect, useRef, useState } from 'react'

function UseRefIntervalIncrementalCounterFunctionalComponent() {
  const countIntervalRef = useRef(0)
  const [count, setCount] = useState(0)
  useEffect(() => {
    countIntervalRef.current = setInterval(() => { setCount((prevCount) => prevCount + 1) }, 1000)
    return () => { clearInterval(countIntervalRef.current) }
  }, [])

  return (
    <>
      <h3>This is an Example of interval incremental counter in Functional Component </h3>
      <div>{count}</div>
      <button onClick={() => { clearInterval(countIntervalRef.current) }}>Clear Incremental Increment</button>
    </>
  )
}

export default UseRefIntervalIncrementalCounterFunctionalComponent