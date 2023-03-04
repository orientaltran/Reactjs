import { applyMiddleware, combineReducers, createStore } from 'redux'
import rdcCity from './Reducers/rdcCity'
import reduxSaga from 'redux-saga' // Saga
import Saga from './Saga/Saga';

const sagaMiddleware = reduxSaga(); // Saga
const globalState = combineReducers({
    cityManage: rdcCity,
})

const store = createStore(
    globalState,
    applyMiddleware(sagaMiddleware) // Saga
)

export default store;

// Phải run sau export
sagaMiddleware.run(Saga); // Saga