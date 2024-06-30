import React, { Component } from 'react'

export default class InputTodoComponent extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder = "할 일을 입력해주세요." />
        <button>추가</button>
      </div>
    )
  }
}
