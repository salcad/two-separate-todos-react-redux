import {createAction} from "redux-actions";
import {VisibilityFilters} from "../TodoShared/TodoShared";
import typeToReducer from "type-to-reducer";

const SET_VISIBILITY_FILTER = '[todo1] SET_VISIBILITY_FILTER';
export const setVisibilityFilter = createAction(SET_VISIBILITY_FILTER, ( filter ) => ({
  filter
}));

export const setVisibilityFilterHandler =  (state, action) => {
  return action.payload.filter
};

export const initialState =
  VisibilityFilters.SHOW_ALL;

export default typeToReducer({
  [setVisibilityFilter]: setVisibilityFilterHandler
}, initialState);
