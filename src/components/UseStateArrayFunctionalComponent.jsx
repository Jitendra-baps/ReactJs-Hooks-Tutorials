import React, { useState } from 'react'

function UseStateArrayFunctionalComponent() {
    const [items, setItem] = useState([])

    const addItem = () => {
        setItem([...items, {
            id: items?.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <>
            <h3>This is a example of how to use array in useState in Functional Component</h3>
            <button onClick={addItem}>Add Item</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item?.id}> {item.value}</li>
                    ))
                }
            </ul>

        </>
    )
}

export default UseStateArrayFunctionalComponent