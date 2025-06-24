import React, { useState } from 'react'
import useDocumentTitle from '../../hooks/useDocumentTitle'

function CustomHookDocumentTitleCountFunctionalComponent() {
    const [count, setCount] = useState(0)
    // useEffect(() => { document.title = `Count - ${count}` }, [count])
    useDocumentTitle(count)
    return (
        <>
            <h3>This is an Example of Custom Hook for setting document title</h3>
            <button onClick={() => { setCount((prevCount) => prevCount + 1) }}>Increment Count {count}</button>
        </>
    )
}

export default CustomHookDocumentTitleCountFunctionalComponent