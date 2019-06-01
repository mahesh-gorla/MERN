import React, { Component } from 'react'

export default class CreateTodo extends Component {
    constructor(props){
        super(props);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeResponsibile = this.onchangeResponsibile.bind(this);
    this.onchangePriority = this.onchangePriority.bind(this);
    this.onchangeCompleted = this.onchangeCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { 
             todo_description: '',
             todo_responsible: '',
             todo_priority: '',
             todo_compleated: false
    }
}
    onchangeDescription (e) {
        this.setState({
            todo_description: e.target.value
        })
    };
    onchangeResponsibile (e) {
        this.setState({
            todo_responsible: e.target.value
        })
    };
    onchangePriority (e) {
        this.setState({
            todo_priority: e.target.value
        })
    };
    onchangeCompleted (e) {
        this.setState({
            todo_compleated: e.target.value
        })
    };
    onSubmit(e){
        e.preventDefault();
console.log('Form submitted');
console.log(`todo description ${this.state.todo_description}`);
console.log(`todo responsible ${this.state.todo_responsible}`);
console.log(`todo priority ${this.state.todo_priority}`);
console.log(`todo compleated ${this.state.todo_compleated}`);
      
    this.setState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_compleated: false
    })
    };

    render() {
        return (
            <div>
               <form onSubmit={this.onSubmit}>
               <div className="form-group">
               <label>Description</label>
               <input type="text" 
               value={this.state.todo_description}
                onChange={this.onchangeDescription}>
               </input>
               </div>
               <div className="form-group">
               <label>Responsible</label>
               <input type="text" 
               value={this.state.todo_responsible}
                onChange={this.onchangeResponsibile}>
               </input>
               </div>
               <div className="form-group">
               <label>Priority</label>
               <input type="text" 
               value={this.state.todo_priority}
                onChange={this.onchangePriority}>
               </input>
               </div>
               <div className="form-group">
               <label>Compleated</label>
               <input type="radio" 
               value={this.state.todo_compleated}
                onChange={this.onchangeCompleted}>
               </input>
               </div>
               <div className="form-group">
               <input type="submit"/>
               </div>
               </form>
            </div>
        )
    }
}
