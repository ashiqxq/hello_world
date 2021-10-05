import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        this.incrementCount = this.incrementCount.bind(this)
        this.resetCount = this.resetCount.bind(this)
        this.incrementTwice = this.incrementTwice.bind(this)
        this.state = {
            count: 0
        }
        
    }
    incrementCount(){
        this.setState((prevstate)=>({
            count: prevstate.count+1
        })
            
        )
    }
    incrementTwice(){
        this.incrementCount();
        this.incrementCount();
    }
    // incrementCount(){
        //// react groups the setstate method calls when object is passed as an argument
    //     this.setState({
    //         count: this.state.count+1
    //     })
    // }
    resetCount(){
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.incrementTwice}> Increment Count</button>
                <h1> {this.state.count}</h1>
                <button onClick={this.resetCount}> Reset Count</button>
            </div>
        )
    }
}


export default Counter
