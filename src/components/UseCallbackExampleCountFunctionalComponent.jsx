import React from 'react'
function UseCallbackExampleCountFunctionalComponent({ text, count }) {
    console.log('Count Component rendered');
    return (<div>{text} - {count}</div>)
}

export default React.memo(UseCallbackExampleCountFunctionalComponent)