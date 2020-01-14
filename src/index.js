import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import { TodoMix1 } from './TodoMix1/TodoMix1';
import todoList1 from './TodoMix1/TodoReducer1'
import todoVisibilityFilter1 from './TodoMix1/TodoVisibilityFilterReducer1'

import { TodoMix2 } from './TodoMix2/TodoMix2';
import { todoList2 } from './TodoMix2/TodoReducer2'
import { todoVisibilityFilter2 } from './TodoMix2/TodoReducer2'

import './index.css';

export const todoReducer = combineReducers({
  todoList1,
  todoVisibilityFilter1,
  todoList2,
  todoVisibilityFilter2
})

const store = createStore(todoReducer)

const Root = () => {
  return (
    <div>
    <TodoMix1 />
    <TodoMix2 />
  </div>
  )
}

render(
    <Provider store={store}>
       <Root/>
    </Provider>,
    document.getElementById('root')
  )

