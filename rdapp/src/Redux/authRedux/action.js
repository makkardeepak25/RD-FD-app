import Axios from axios
import { FORM_REGISTER_REQ,FORM_REGISTER_SUCCESS,FORM_REGISTER_FAILURE } from "./actionTypes"

export const registerRequest = () => {
    return {
        type:FORM_REGISTER_REQ
    }
}
export const registerSuccess = (payload) => {
    return {
        type:FORM_REGISTER_SUCCESS,
        payload
        
        
    }
}

export const registerFailure = (payload) => {
    return {
        type:FORM_REGISTER_FAILURE,
        payload
    }
}