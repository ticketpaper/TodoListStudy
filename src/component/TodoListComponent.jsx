import React, { Component } from 'react'

export default class TodoListComponent extends Component {
    render() {
        const todoList = this.props.todos.map(todo => {
            return (
                <li key={todo.id} className='todo_item'>
                    <input type="checkBox" />
                    <div className="todo-content">{todo.content}</div>
                    <div className="todo-buttons">
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                </li>
            )
        });
        return (
            <div className='todo-list'>
                <ul>
                    {todoList}
                </ul>
            </div>
        )
    }
}
