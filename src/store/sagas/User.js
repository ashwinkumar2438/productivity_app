import { call, put, takeLeading, all } from "redux-saga/effects";
import {Login} from '@src/apis';
import {Types,Actions} from '@src/store/Reducers';

function* LoginUser({payload}){
    console.log('fetch user',payload);
    try{
        let user=yield call(Login,payload);
        yield put(Actions.user.success(user));
    }
    catch(error){
        console.log(error);
        yield put(Actions.user.fail());
    }

}

function* SignupUser(){
    console.log('check user');
    try{
        let user=yield call(function(){return Promise.resolve(true)});
        yield put(Actions.user.success(user));
    }
    catch(err){
        console.log(err);
        yield put(Actions.user.fail());
    }
}

const interceptUser=function*(){
    yield   all([
                takeLeading(Types.user.LOGIN,LoginUser),
                takeLeading(Types.user.SIGNUP,SignupUser)
            ]);
}


export {interceptUser};
