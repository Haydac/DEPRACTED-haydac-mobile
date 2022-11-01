import axios from 'axios'
import { API_URL } from '@env'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
} from './userConstants'
import localStorage from '../../utils/localStorage'
import { loginApi, registerApi } from '../../api/AuthProvider'

/**
 *
 * @param {*} formValues
 * @param {*} dispatch
 * @returns
 */
const register = async (formValues, dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: formValues })
  try {
    const response = await registerApi(formValues)
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: { message: response.data.message },
    })

    localStorage.setItem('userInfo', response.data)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { data: response.data, token: response.jwt },
    })
    return response.data
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

const login = async (formValues, dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: formValues })
  try {
    const response = await loginApi(formValues)
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { data: response.data, token: response.jwt },
    })
    localStorage.setItem('userInfo', response.data)
    return response.data
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export default { register, login }