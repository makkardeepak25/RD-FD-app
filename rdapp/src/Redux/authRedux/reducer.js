import {FORM_REGISTER_REQUEST} from "./actionTypes"

const authReducer=(state=initState,{type,payload})=>{
    switch(type){
        case FORM_REGISTER_REQUEST:{
            return{
                ...state,
                
            }
        }
        case FORM_SIGN_REQUEST:{}
    }
}