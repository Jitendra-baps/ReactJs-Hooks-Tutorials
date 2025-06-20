import React from 'react'
import useInputControl from '../hooks/useInputControl';

function CustomHookInputControlFunctionalComponent() {
  const [firstName, firstNameBind, firstNameReset] = useInputControl()
  const [lastName, lastNameBind, lastNameReset] = useInputControl()


  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Full Name: ${firstName} ${lastName}`)
    firstNameReset()
    lastNameReset()
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label id="firstName">First Name</label>
        <input type="text" name='firstName' {...firstNameBind} />
      </div>
      <div>
        <label id="lastName">Last Name</label>
        <input type="text" name='lastName' {...lastNameBind} />
      </div>
      <button type='submit'>submit</button>
    </form>
  )
}

export default CustomHookInputControlFunctionalComponent