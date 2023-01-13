import { combineReducers } from 'redux'
import authReducers from './auth/authReducers'
import businessReducer from './business/businessReducer'

export const rootReducer = combineReducers({
  user: authReducers.userAuthReducer,
  businesses: businessReducer.fetchBusinesses,
})
