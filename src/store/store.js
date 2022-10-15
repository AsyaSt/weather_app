import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {weatherReducer} from './reducers/weatherReducer'
import {all} from 'redux-saga/effects';
import {watcherSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers({weatherReducer}), applyMiddleware(sagaMiddleware));


function* rootSaga(){ 
    yield all([ 
        watcherSaga()
    ])
}

sagaMiddleware.run(rootSaga);