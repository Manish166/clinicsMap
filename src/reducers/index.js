import { SET_FILTER, SET_LOCATION_ACTION } from "../constants/action-types";
import { SET_RADIO_FILTER } from "../constants/action-types";

const initialState = {
    filter : {},
    choice : null,
    markerLocation : ''
  };
  
function rootReducer(state = initialState, action) {
    if (action.type === SET_FILTER) {
      return ({...state, filter : action.payload})
    }

    if (action.type === SET_RADIO_FILTER) {
      return ({...state, choice : action.payload})
    }

    if (action.type === SET_LOCATION_ACTION){
      return ({...state, markerLocation : action.payload})
    }
    return state;
  };
  
  export default rootReducer;