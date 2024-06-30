import React, { Component } from 'react'
import './App.css'
import TodoTemplateComponent from './component/TodoTemplateComponent'
import TodoListComponent from './component/TodoListComponent'
import TodoCountComponent from './component/TodoCountComponent'
import InputTodoComponent from './component/InputTodoComponent'

/**
 * Todo List 실습
 * 기능: 할 일 추가, 수정, 삭제, 완료 처리
 */

export default class App extends Component {
  render() {
    return (
      <TodoTemplateComponent>
        <InputTodoComponent />
        <TodoListComponent />
        <TodoCountComponent />
      </TodoTemplateComponent>
    )
  }
}