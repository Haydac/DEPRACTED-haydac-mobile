import { combineReducers } from 'redux'
import userReducer from './auth/authReducers'
import businessReducer from './business/businessReducer'
import favouriteReducer from './favourites/favouriteReducer'

export const rootReducer = combineReducers({
  user: userReducer.authReducer,
  business: businessReducer.businessReducer,
  favouritedBusinesses: favouriteReducer.businessReducer,
})
