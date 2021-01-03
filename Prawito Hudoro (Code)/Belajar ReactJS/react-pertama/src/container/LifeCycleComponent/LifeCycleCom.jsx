import React, { Component } from 'react';
import "./LifeCycleCom.css"

class LifeCycleComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
        }
        console.log("this Constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        return null;
    }

    componentDidMount() {
        console.log("Component did mount")
        setTimeout(() => {
        this.setState({
            count:2
            })
        }, 5000);  
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("component should update")
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("snapshot before update")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("did update component")
    }

    componentWillUnmount() {

    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render")
        return (
            <button className="btn" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;