import React, {Component} from 'react'


class Messages extends Component{
    constructor(){
        super();
        this.state = {message: "Welcome from state"}
        this.changeState = this.changeState.bind(this)    
    }
    changeState(){
        this.setState({message: "subscribed"})
    }
    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={this.changeState}> subscribe </button>
            </div>
        )
    }
}
export default Messages;
