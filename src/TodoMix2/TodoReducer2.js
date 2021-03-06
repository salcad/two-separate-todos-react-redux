import { VisibilityFilters } from '../TodoShared/TodoShared'

let nextTodoId = 0
export const addTodo = text => ({
  type: '[todo2] ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = id => ({
  type: '[todo2] TOGGLE_TODO',
  id
})

export const todoList2 = (state = [], action) => {
    switch (action.type) {
      case '[todo2] ADD_TODO':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case '[todo2] TOGGLE_TODO':
        return state.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export const setVisibilityFilter = filter => ({
    type: '[todo2] SET_VISIBILITY_FILTER',
    filter
  })

      
  export const todoVisibilityFilter2 = (state = VisibilityFilters.SHOW_ALL, action) => {
      switch (action.type) {
        case '[todo2] SET_VISIBILITY_FILTER':
          return action.filter
        default:
          return state
      }
  }

  
