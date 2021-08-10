import {combineReducers} from 'redux';
import { UserReducer, UserActions,UserTypes } from './User';

const RootReducer=combineReducers({user:UserReducer});

const Actions={
    user:UserActions
}
const Types={
    user:UserTypes
}

export {RootReducer,Actions,Types};