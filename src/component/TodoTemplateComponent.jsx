import React, { Component } from 'react'
import TodoListComponent from './TodoListComponent'
import TodoCountComponent from './TodoCountComponent'
import InputTodoComponent from './InputTodoComponent'

export default class TodoTemplateComponent extends Component {
    state = {
        todos: [],
        inputContent: '',
    }

    handleInputChange = (input) => {
        this.setState({
            inputContent: input.target.value
        });
    }

    addTodo = () => {
        const newTodo = {
            id: Date.now(),
            content: this.state.inputContent,
            status: false
        }
        if (this.state.inputContent) {
            this.setState({
                todos: [...this.state.todos, newTodo],
                inputContent: ''
            }, () => {
                console.log(this.state.todos)
            })
        } else {
            alert("값을 입력해주세요.")
        }
    }
    
    render() {
        return (
            <div className='todo-template'>
                <h1>Todo List</h1>
                <TodoCountComponent
                    todoCount={this.state.todos.length}
                />
                <InputTodoComponent
                    inputContent={this.state.inputContent}
                    addTodo={this.addTodo}
                    handleInputChange={this.handleInputChange}
                />
                <TodoListComponent
                    todos={this.state.todos}
                />
                
            </div>
        )
    }
}
