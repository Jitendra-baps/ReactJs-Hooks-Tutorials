import React, { Component } from 'react'

class CounterClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`
    }

    render() {
        return (
            <>
                <h3>This is an Example of counter using class component</h3>
                <button onClick={this.incrementCount}>Clicked {this.state.count} Times</button>
            </>
        )
    }
}

export default CounterClassComponent