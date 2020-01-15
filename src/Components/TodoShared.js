
import React from 'react';
import ReactDOM from "react-dom";
import {addTodo1} from "../Redux/TodoReducer";
import {addTodo2} from "../Redux/TodoReducer";

export const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export const Link = ({ active, children, onClick }) => (
  <button
     onClick={onClick}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </button>
)

class NewTodoItem1 extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input ref="itemName" type="text" />
        <input type="submit" value="Submit" />
      </form>);
  }

  onSubmit(event){
    event.preventDefault();
    const input = ReactDOM.findDOMNode(this.refs.itemName);
    const newItem = input.value;
    this.props.dispatch(addTodo1(newItem))
    input.value = '';
  }

}

class NewTodoItem2 extends React.Component {

  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this.refs.itemName).focus();
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input ref="itemName" type="text" />
        <input type="submit" value="Submit" />
      </form>);
  }

  onSubmit(event){
    event.preventDefault();
    const input = ReactDOM.findDOMNode(this.refs.itemName);
    const newItem = input.value;
    this.props.dispatch(addTodo2(newItem))
    input.value = '';
  }

}

export const newTodoItem1 = NewTodoItem1;
export const newTodoItem2 = NewTodoItem2;

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
