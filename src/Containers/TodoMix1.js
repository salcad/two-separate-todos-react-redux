import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import '../Todo.css';

import { TodoList, newTodoItem1 } from '../Components/TodoShared'
import { Link } from '../Components/TodoShared'
import { getVisibleTodos } from '../Components/TodoShared'
import { VisibilityFilters } from '../Components/TodoShared'

import { toggleTodo1 } from '../Redux/TodoReducer'
import { setVisibilityFilter1 } from '../Redux/TodoVisibilityFilterReducer'

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
  onClick: () => dispatch(setVisibilityFilter1(ownProps.filter))
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
  toggleTodo: toggleTodo1
}

const ConTodoList = connect(mapStateToPropsTodoList,
  mapDispatchToPropsTodoList)(TodoList);

const ConNewTodoItem = connect()(newTodoItem1);

