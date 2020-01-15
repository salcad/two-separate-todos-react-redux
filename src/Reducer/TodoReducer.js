
import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';


const ADD_TODO1 = '[todo1] ADD_TODO';
const TOGGLE_TODO1 = '[todo1] TOGGLE_TODO';
let nextTodoId1 = 0;
export const addTodo1 = createAction(ADD_TODO1, ( text ) => ({
  id: nextTodoId1++,
  text
}));
export const toggleTodo1 = createAction(TOGGLE_TODO1, ( id ) => ({
  id
}));

const ADD_TODO2 = '[todo2] ADD_TODO';
const TOGGLE_TODO2 = '[todo2] TOGGLE_TODO';
let nextTodoId2 = 0;
export const addTodo2 = createAction(ADD_TODO2, ( text ) => ({
  id: nextTodoId2++,
  text
}));
export const toggleTodo2 = createAction(TOGGLE_TODO2, ( id ) => ({
  id
}));

const addTodoHandler =  (state, action) => {
  return [
    ...state,
    {
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    }
  ]
};

const toggleTodoHandler =  (state, action) => {
  return state.map(todo =>
    (todo.id === action.payload.id)
      ? {...todo, completed: !todo.completed}
      : todo
  )
};

export const initialState1 = [];

export const todoList1 = typeToReducer({
  [addTodo1]: addTodoHandler,
  [toggleTodo1]: toggleTodoHandler,
}, initialState1);

export const initialState2 = [];

export const todoList2 = typeToReducer({
  [addTodo2]: addTodoHandler,
  [toggleTodo2]: toggleTodoHandler,
}, initialState2);





