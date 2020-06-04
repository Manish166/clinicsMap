import { SET_FILTER } from "../constants/action-types";
import { SET_RADIO_FILTER } from "../constants/action-types";
import {FIND_CLINIC_ACTION} from '../constants/action-types'
import {SET_LOCATION_ACTION} from '../constants/action-types'

export function setFilter (category){
    return {
        type : SET_FILTER, 
        payload : category
    }
}

export function setRadioFilter (choice){
    return {
        type : SET_RADIO_FILTER, 
        payload : choice
    }
}

export function getAllClinicsAction (){
    console.log('in Action GETALLCLINICS')
    return {
        type : GET_ALL_CLINICS
    }
}

export function setLocationAction(payload){
    console.log('setLocationaction')
    return {
        type : SET_LOCATION_ACTION,
        payload : payload
    }
}
    
        
