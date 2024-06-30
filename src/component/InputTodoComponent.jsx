import React, { Component } from 'react'

export default class InputTodoComponent extends Component {
    render() {
        return (
            <div className='todo-input'>
                <input
                    type="text"
                    placeholder="할 일을 입력해주세요."
                    value={this.props.inputContent}
                    onChange={this.props.handleInputChange}
                />
                <button onClick={this.props.addTodo}>
                    추가
                </button>
            </div>
        )
    }
}
