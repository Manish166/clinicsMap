import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from "./reducers/index";
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga)
export default store;
