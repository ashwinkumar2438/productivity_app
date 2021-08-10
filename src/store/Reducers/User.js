import { bindTypesToActions } from "@src/utils/redux_utils";

const types={
    NAME:'USERNAME',
    EMAIL:'USEREMAIL',
    LOGIN:'USER_LOGIN',
    SIGNUP:'USER_SIGNUP',
    SUCCESS:'USER_DATA_SUCCESS',
    FAIL:'USER_DATA_FAILED'
}

const UserActions=bindTypesToActions(types);
 
const InitialState={
    name:'None',
    email:null
}
const UserReducer=(state=InitialState,action)=>{
    switch(action.type){
        case types.NAME:
            return {...state,name:action.payload.data};
        case types.EMAIL:
            return {...state,email:action.payload.email}  
        case types.SUCCESS:
            return {...state,...action.payload}
        default:return state;      
    }
}
export {
    types as UserTypes,
    UserActions,
    UserReducer};