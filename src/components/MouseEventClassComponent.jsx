import React, { Component } from 'react'

class MouseEventClassComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }
    logMousePosition = (e) => {
        this.setState(({ x: e.clientX, y: e.clientY }))

    }
    componentDidMount() {
        window.addEventListener('mouseover', this.logMousePosition)
    }

    componentWillUnmount(){
        window.removeEventListener('mouseover', this.logMousePosition)
    }

    render() {
        return (
            <>
                <h3>This is an Example of how to log coordinate of mouse using class component</h3>
                <div> X - {this.state.x}  Y - {this.state.y}</div>
            </>
        )
    }
}

export default MouseEventClassComponent