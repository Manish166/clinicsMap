import { SET_FILTER } from "../constants/action-types";
import { SET_RADIO_FILTER } from "../constants/action-types";


export function setFilter (category){
    return {type : SET_FILTER, 
        payload : category}
}

export function setRadioFilter (choice){
    return {type : SET_RADIO_FILTER, 
        payload : choice}
}
    
        
