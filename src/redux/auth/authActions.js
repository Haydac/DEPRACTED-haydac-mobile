import axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
} from './actionTypes'
import { API_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const registerAction = (data) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST })

  try {
    const response = await axios.post(`${API_URL}/user/signup`, formValues)
    const data = response.data

    // set credentials to async storage
    await storeCredentials(data.jwt)

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.information })
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
  }
}

export const loginAction = (formValues) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST })

  try {
    const response = await axios.post(`${API_URL}/user/login`, formValues)
    const data = response.data

    // set credentials to async storage
    await storeCredentials(data.jwt)

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data.information })
  } catch (error) {
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message })
  }
}

const storeToken = async (token) => {
  await AsyncStorage.setItem('token', token)
  //   await AsyncStorage.setItem('email', email)
  //   await AsyncStorage.setItem('password', password) // TODO: might have to delete
}
