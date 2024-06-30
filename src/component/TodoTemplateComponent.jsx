import React, { Component } from 'react'
import InputTodoComponent from './InputTodoComponent'
import TodoListComponent from './TodoListComponent'
import TodoCountComponent from './TodoCountComponent'

export default class TodoTemplateComponent extends Component {
    render() {
        return (
            <div className='todo-template'>
                <h1>Todo List</h1>
                <InputTodoComponent/>
                <TodoListComponent />
                <TodoCountComponent />
                
            </div>
        )
    }
}
