import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RootReducer } from './Reducers';
import rootSaga from './sagas';


const sagaMiddleware=createSagaMiddleware();

const middlewares=[sagaMiddleware];

const store=compose(
   applyMiddleware(...middlewares), 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(RootReducer);

sagaMiddleware.run(rootSaga);

export default store;
