import React, { useCallback, useState } from 'react'
import UseCallbackExampleCountFunctionalComponent from './UseCallbackExampleCountFunctionalComponent'
import UseCallbackExampleButtonFunctionalComponent from './UseCallbackExampleButtonFunctionalComponent'
import UseCallbackExampleTitleFunctionalComponent from './UseCallbackExampleTitleFunctionalComponent'

function UseCallbackExampleLayoutFunctionalComponent() {
    const [age, setAge] = useState(23);
    const [salary, setIncrementSalary] = useState(15000)

    const incrementSalary = useCallback(() => { setIncrementSalary(salary + (salary / 100 * 10)) }, [salary])
    const aging = useCallback(() => { setAge(age + 1) }, [age])

    return (
        <>
            <UseCallbackExampleTitleFunctionalComponent />
            <UseCallbackExampleCountFunctionalComponent text={'Age'} count={age}></UseCallbackExampleCountFunctionalComponent>
            <UseCallbackExampleButtonFunctionalComponent handleClick={aging}>Apply Aging</UseCallbackExampleButtonFunctionalComponent>
            <UseCallbackExampleCountFunctionalComponent text={'Salary'} count={salary}></UseCallbackExampleCountFunctionalComponent>
            <UseCallbackExampleButtonFunctionalComponent handleClick={incrementSalary}>Apply Increment</UseCallbackExampleButtonFunctionalComponent>
        </>
    )
}

export default React.memo(UseCallbackExampleLayoutFunctionalComponent)