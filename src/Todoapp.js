import React, { Component } from 'react'
import "./Todo.css"

export default class Todoapp extends Component {
    state={
        input:"",
        items:[]
    }
    handlechange=(event)=>{
        this.setState({
            input:event.target.value
        });
        
    }
    setItems=(event)=>{
        event.preventDefault();
        const{input}=this.state;
      
        this.setState({
            items:[...this.state.items,input]
        });
        
    }
    itemdlt=key=>{
        console.log(key)
        const allitem=this.state.items;
        allitem.splice(key,1);
        this.setState({
            items:allitem
        });


    }
    
  render() {
    const{input,items }=this.state;
    console.log(items)

    return (
      <div>
        <div className='container'>
       
        <form className="box" onSubmit={this.setItems}>
        <h1> TODOLIST</h1>
            <input type="text"
            value={input} 
            onChange={this.handlechange}
            placeholder='Typehere'></input>
        </form>
        <ul>
          
          {items.map((data,index)=>(
            <li key={index}>
                {data}<i class="fa-solid fa-trash-can" onClick={()=>this.itemdlt(index)}></i></li>
          ))}
        </ul>
        </div>
        </div>
    )
  }
}
