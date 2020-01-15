import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'

import { TodoMix1 } from './TodoMix/TodoMix1';
import { todoList1 } from './Reducer/TodoReducer'
import { todoVisibilityFilter1 } from './Reducer/TodoVisibilityFilterReducer'

import { TodoMix2 } from './TodoMix/TodoMix2';
import { todoList2 } from './Reducer/TodoReducer'
import { todoVisibilityFilter2 } from './Reducer/TodoVisibilityFilterReducer'

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

