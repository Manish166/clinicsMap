import { SET_FILTER } from "../constants/action-types";
import filter from "../component/filter";

const initialState = {
    filter : {}
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === SET_FILTER) {
      return ({...state, filter : action.payload})
    }
    return state;
  };
  
  export default rootReducer;