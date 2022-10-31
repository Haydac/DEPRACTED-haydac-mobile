import { combineReducers } from 'redux'
import userReducer from './user/userReducer'

export const rootReducer = combineReducers({
  userRegister: userReducer.register,
  userLogin: userReducer.login,
})
