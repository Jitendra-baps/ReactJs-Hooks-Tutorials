import React, { useEffect, useRef } from 'react'

function UseRefInputFocusFunctionalComponent() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <h3>This is an Example of useRef to focus input on render in Functional Component </h3>
      <input type="text" ref={inputRef} />
    </>
  )
}

export default UseRefInputFocusFunctionalComponent  