import React from 'react'

function UseCallbackExampleButtonFunctionalComponent({ handleClick, children }) {
    console.log('Button Component rendered');
    return (<button onClick={handleClick}>{children}</button>)
}

export default React.memo(UseCallbackExampleButtonFunctionalComponent)