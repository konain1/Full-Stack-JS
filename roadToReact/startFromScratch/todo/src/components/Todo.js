import React, { Component } from 'react'

export class Todo extends Component {

    constructor(){
        super()

        this.state = {
            tasks : [{task:'but some vegetables',id:1}],
            curreTask: ""
        }
    }

    handlerChange = (e)=>{
        console.log(e.target.value)
        this.setState({
            curreTask : e.target.value
        })

    }

    handleAddTask = ()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.curreTask,id:this.state.tasks.length+1}]
        })
    }

    handleDelete = (id) =>{
       
            let narr = this.state.tasks.filter((taskObj)=>{
                return taskObj.id !== id
            })
            this.setState({
                tasks:[...narr]
            });
    }
  render() {
    return (
      <div>
    <input type="text" value={this.state.curreTask} onChange={this.handlerChange}/>
    <button onClick={this.handleAddTask}>add task</button>

    <ul>
    {this.state.tasks.map((taskObj)=>(
        <li>
        <p>{taskObj.task}</p>
        <button onClick={()=>this.handleDelete(taskObj.id)}>delete this</button>
        </li>
    ))}
    </ul>
      </div>
    )
  }
}

export default Todo
