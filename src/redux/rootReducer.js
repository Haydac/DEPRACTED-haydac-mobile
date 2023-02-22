import { combineReducers } from 'redux'
import userReducer from './auth/authReducers'
import businessReducer from './business/businessReducer'

export const rootReducer = combineReducers({
  user: userReducer.authReducer,
  business: businessReducer.businessReducer,
})
