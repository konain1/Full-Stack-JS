import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props){
        super(props)
        this.state = {
            Count:0
        }
    
    }

    increment(){
        this.setState({
            Count : this.state.Count + 1
            //
        })
        console.log(this.state.Count)
    }

  render() {
    return (
      <div>
      <div>
      Count- {this.state.Count}
      
      </div>
        
        <button onClick={()=>this.increment()}>Increment krlo</button>
      </div>
    )
  }
}

export default Counter
