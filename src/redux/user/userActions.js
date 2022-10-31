import axios from 'axios'
import { API_URL } from '@env'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_LOGIN_SUCCESS,
} from './userConstants'
import localstorage from '../../utils/localstorage'
import { login, registerApi } from '../../api/AuthProvider'

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
      payload: response.data.message,
    })

    localstorage.setItem('userInfo', response.data)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { data: response.data, token: response.jwt },
    })
    return { success: true }
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

export default { register }
