import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getItem } from '../utils/localstorage'
import { rootReducer } from './rootReducer'

const storedUserInfo = getItem('userInfo')
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
