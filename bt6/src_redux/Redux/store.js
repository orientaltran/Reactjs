import { combineReducers, createStore } from 'redux'
import rdcUser from './Reducers/rdcUser'
import counter from "./Reducers/rdcCounter";

const GlobalState = combineReducers({
    userManage: rdcUser,
    counter,
})

const store = createStore(GlobalState)

export default store

