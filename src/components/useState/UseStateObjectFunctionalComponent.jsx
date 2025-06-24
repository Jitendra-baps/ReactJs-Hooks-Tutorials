import React, { useState } from 'react'

function UseStateObjectFunctionalComponent() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    const updateName = (event) => {
        const { name, value } = event.target
        setName((prevName) => ({ ...prevName, [name]: value }))
    }

    return (
        <form>
            <h3>This is a example of how to use object in useState in Functional Component</h3>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={name.firstName}
                onChange={updateName}
            />
            <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={name.lastName}
                onChange={updateName}
            />
            <p>
                Full Name: {name.firstName} {name.lastName}
            </p>
        </form>
    )
}

export default UseStateObjectFunctionalComponent