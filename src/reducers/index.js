//User reducer
import { 
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS , USER_LOGIN_FAIL , USER_LOGOUT_SUCCESS

} from "../constants";

export const userAccountReducer = (state = {} , action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
            return {loading:true};
        case USER_LOGIN_SUCCESS:
            return {loading:false,...action.payload};
        case USER_LOGIN_FAIL:
            return {loading:false,...action.payload}
        case USER_LOGOUT_SUCCESS:
            return {}
        default:
            return state;
    }
}