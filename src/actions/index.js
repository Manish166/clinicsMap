import { SET_FILTER } from "../constants/action-types";

export function setFilter (category){
    return {type : SET_FILTER, 
        payload : category}
}
    
        
