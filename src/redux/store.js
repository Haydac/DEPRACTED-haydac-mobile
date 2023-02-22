import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getItem } from '../utils/localstorage'
import { rootReducer } from './rootReducer'

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

export default store
