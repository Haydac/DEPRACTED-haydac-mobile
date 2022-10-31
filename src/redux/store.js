import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import localstorage from '../utils/localstorage'
import { rootReducer } from './rootReducer'

const storedUserInfo = localstorage.getItem('userInfo')
const initialState = {
  userLogin: {
    userInfo: storedUserInfo ? storedUserInfo : null,
  },
}

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(thunk))
)

export default store
