import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from "./reducers";
import { hotelsWatcher } from "../saga/hotelsSaga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(hotelsWatcher)