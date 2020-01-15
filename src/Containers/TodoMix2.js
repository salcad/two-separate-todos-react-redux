import React from 'react';
import { connect } from 'react-redux'
import '../Todo.css';

import { TodoList, newTodoItem2 } from '../Components/TodoShared'
import { Link } from '../Components/TodoShared'
import { getVisibleTodos } from '../Components/TodoShared'
import { VisibilityFilters } from '../Components/TodoShared'

import { toggleTodo2 } from '../Redux/TodoReducer'
import { setVisibilityFilter2 } from '../Redux/TodoVisibilityFilterReducer'


export const TodoMix2 = () => {
  return(
    <div>
       <ConTodoList />
       <ConNewTodoItem />
       <Footer />
    </div>
    );
}

const mapStateToPropsLink = (state, ownProps) => ({
  active: ownProps.filter === state.todoVisibilityFilter2
})

const mapDispatchToPropsLink = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter2(ownProps.filter))
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
  todos: getVisibleTodos(state.todoList2, state.todoVisibilityFilter2)
})

const mapDispatchToPropsTodoList = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo2(id))
})

const ConTodoList = connect(mapStateToPropsTodoList,
  mapDispatchToPropsTodoList)(TodoList);

const ConNewTodoItem = connect()(newTodoItem2);

