
import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';


const ADD_TODO = '[todo1] ADD_TODO';
const TOGGLE_TODO = '[todo1] TOGGLE_TODO';

let nextTodoId = 0;
export const addTodo = createAction(ADD_TODO, ( text ) => ({
  id: nextTodoId++,
  text
}));
export const toggleTodo = createAction(TOGGLE_TODO, ( id ) => ({
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

export const initialState = [];

export default typeToReducer({
  [addTodo]: addTodoHandler,
  [toggleTodo]: toggleTodoHandler,
}, initialState);





