import {all} from 'redux-saga/effects';
import {interceptUser} from './User';

export default function* rootSaga(){
    yield all([interceptUser()]);
}