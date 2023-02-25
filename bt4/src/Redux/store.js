import { combineReducers, createStore } from 'redux'
import rdcUser from './Reducers/rdcUser'

const GlobalState = combineReducers({
    userManage: rdcUser
})

const store = createStore(GlobalState)

export default store