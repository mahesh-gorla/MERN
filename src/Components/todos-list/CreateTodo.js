import React, { Component } from 'react'

export default class CreateTodo extends Component {
    state = { 
             todo_description: '',
             todo_responsible: '',
             todo_prioritu: '',
             todo_compleated: false
    }
    render() {
        return (
            <div>
            CreateTodo
            </div>
        )
    }
}
