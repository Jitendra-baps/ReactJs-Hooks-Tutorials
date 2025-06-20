import React, { Component } from 'react'

class UseRefIntervalIncrementalCounterWithoutUseRefClassComponent extends Component {
    interval
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => { this.setState((prevState) => ({ count: prevState.count + 1 })) }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <>
                <h3>This is an Example of interval incremental counter in Class Component </h3>
                <div> {this.state.count}</div>
                <button onClick={() => { clearInterval(this.interval) }}>Clear Interval Increment</button>
            </>
        )
    }
}

export default UseRefIntervalIncrementalCounterWithoutUseRefClassComponent