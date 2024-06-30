import React, { Component } from 'react'

export default class TodoCountComponent extends Component {
  render() {
    return (
      <div className='todo-count'>
        <div>해야 할 일 {this.props.todoCount}개</div>
      </div>
    )
  }
}
