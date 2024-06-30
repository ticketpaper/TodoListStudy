import React, { Component } from 'react'

export default class TodoListComponent extends Component {
  render() {
    return (
      <div>
        <input type="checkBox" />
        대충 해야할 일
        <button>수정</button>
        <button>삭제</button>
      </div>
    )
  }
}
