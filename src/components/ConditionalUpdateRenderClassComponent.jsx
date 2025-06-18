import React, { Component } from 'react'

class ConditionalUpdateRenderClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }
    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updating document title');
        if (prevState.count != this.state.count) {
            console.log(prevState);

            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <>
                <h3>This is an Example of how to trigger componentDidUpdate conditionally using class component</h3>
                <input type="text" name='name' value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <button onClick={this.incrementCount}>Clicked {this.state.count} Times</button>
            </>
        )
    }

}

export default ConditionalUpdateRenderClassComponent