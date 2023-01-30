import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
} from './actionTypes'

const initialState = {
  // token is stored in asyncStorage
  profile: {
    fullname: '',
    address: '',
    phone: '',
    favourites: [],
  },
  isLoggedIn: false,
  loading: false,
  error: '',
}

/**
 * Updates the store when user is authenticated(login, signup)
 * and
 * Handles updating and displaying information to the user
 *
 * @param {*} state - current state of user
 * @param {*} action - login/signup request
 * @returns
 */
const userAuthReducer = (state = initialState, action) => {
  // store token in asyncStorage
  switch (action.type) {
    case USER_REGISTER_REQUEST:
    case USER_LOGIN_REQUEST:
      return { ...initialState, loading: true }
    case USER_REGISTER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { ...initialState, profile: action.payload, isLoggedIn: true }
    case USER_REGISTER_FAIL:
    case USER_LOGIN_FAIL:
      return { ...initialState, error: action.payload }
    case USER_LOGOUT:
      return {
        ...initialState,
        profile: { fullname: '', address: '', phone: '', favourites: [] },
        isLoggedIn: false,
      }
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...initialState, loading: true }
    case USER_UPDATE_PROFILE_SUCCESS:
      return { ...initialState, profile: action.payload, loading: false }
    case USER_UPDATE_PROFILE_FAIL:
      return { ...initialState, loading: false, error: action.payload }
    default:
      return state
  }
}

export default { userAuthReducer }
