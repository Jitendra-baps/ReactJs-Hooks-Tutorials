import React, { Component } from 'react'

class IntervalCounterClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 200)
    }

    tick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {
        return (
            <>
                <h3>This is an Example of interval incremental counter in class component</h3>
                <div>{this.state.count}</div>
            </>
        )
    }
}

export default IntervalCounterClassComponent