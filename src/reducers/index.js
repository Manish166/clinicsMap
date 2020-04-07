import { SET_FILTER } from "../constants/action-types";
import { SET_RADIO_FILTER } from "../constants/action-types";

const initialState = {
    filter : {},
    choice : null
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === SET_FILTER) {
      return ({...state, filter : action.payload})
    }

    if (action.type === SET_RADIO_FILTER) {
      return ({...state, choice : action.payload})
    }
    return state;
  };
  
  export default rootReducer;