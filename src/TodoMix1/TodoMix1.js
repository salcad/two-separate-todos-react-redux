import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import '../Todo.css';

import { TodoList } from '../TodoShared/TodoShared'
import { Link } from '../TodoShared/TodoShared'
import { getVisibleTodos } from '../TodoShared/TodoShared'
import { VisibilityFilters } from '../TodoShared/TodoShared'

import { addTodo } from './TodoReducer1'
import { toggleTodo } from './TodoReducer1'
import { setVisibilityFilter } from './TodoVisibilityFilterReducer1'

export const TodoMix1 = () => {
  return(
    <div>
       <ConTodoList />
       <ConNewTodoItem />
       <Footer />
    </div>
    );
}

const mapStateToPropsLink = (state, ownProps) => ({
  active: ownProps.filter === state.todoVisibilityFilter1
})

const mapDispatchToPropsLink = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

const ConLink = connect(mapStateToPropsLink, mapDispatchToPropsLink)(Link);

const Footer = () => (
  <div>
    <span>Show: </span>
    <ConLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </ConLink>
    <ConLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </ConLink>
    <ConLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </ConLink>
  </div>
)

const mapStateToPropsTodoList = state => ({
  todos: getVisibleTodos(state.todoList1, state.todoVisibilityFilter1)
})

const mapDispatchToPropsTodoList = {
  toggleTodo
}

const ConTodoList = connect(mapStateToPropsTodoList,
  mapDispatchToPropsTodoList)(TodoList);

class NewTodoItem extends React.Component {

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
      var input = ReactDOM.findDOMNode(this.refs.itemName)
      var newItem = input.value;
      this.props.dispatch(addTodo(newItem))
      input.value = '';
    }

  }

const ConNewTodoItem = connect()(NewTodoItem);

