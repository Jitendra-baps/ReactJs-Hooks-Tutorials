import React from 'react'

function UseCallbackExampleTitleFunctionalComponent() {
    console.log('Title Component rendered');
    return (<h3>This is an example of how to use useCallback Hook in Functional Component</h3>)
}

export default React.memo(UseCallbackExampleTitleFunctionalComponent)