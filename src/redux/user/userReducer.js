import { combineReducers } from 'redux'
import { getItem } from '../../utils/localstorage'
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from './userConstants'

const userInfo = getItem('userInfo')

const initialState = {
  email: null,
  password: null,
  isLoggedIn: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS:
      return {
        ...state,
        email: action.email,
        password: action.password,
        isLoggedIn: true,
      }
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      }
    default:
      return state
  }
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}

const register = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { userInfo: null, isLoggdIn: false }
    case USER_REGISTER_SUCCESS:
      return { userInfo: action.payload, isLoggdIn: true }
    case USER_REGISTER_FAIL:
      return { userInfo: null, isLoggdIn: false }
    default:
      return state
  }
}

export default { login, register }
