import {createAction} from "redux-actions";
import {VisibilityFilters} from "../Components/TodoShared";
import typeToReducer from "type-to-reducer";

const SET_VISIBILITY_FILTER1 = '[todo1] SET_VISIBILITY_FILTER';
export const setVisibilityFilter1 = createAction(SET_VISIBILITY_FILTER1, ( filter ) => ({
  filter
}));

const SET_VISIBILITY_FILTER2 = '[todo2] SET_VISIBILITY_FILTER';
export const setVisibilityFilter2 = createAction(SET_VISIBILITY_FILTER2, ( filter ) => ({
  filter
}));

export const setVisibilityFilterHandler =  (state, action) => {
  return action.payload.filter
};

export const initialState1 =
  VisibilityFilters.SHOW_ALL;

export const initialState2 =
  VisibilityFilters.SHOW_ALL;

export const todoVisibilityFilter1 = typeToReducer({
  [setVisibilityFilter1]: setVisibilityFilterHandler
}, initialState1);

export const todoVisibilityFilter2 = typeToReducer({
  [setVisibilityFilter2]: setVisibilityFilterHandler
}, initialState2);
