import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import businessReducer from './business/businessReducer'

export const rootReducer = combineReducers({
  userRegister: userReducer.register,
  userLogin: userReducer.login,
  businesses: businessReducer.fetchBusinesses,
})
