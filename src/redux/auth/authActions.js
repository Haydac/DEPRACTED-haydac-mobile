import axios from 'axios'
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_REQUEST,
} from './actionTypes'
import { API_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { loginApi } from '../../api/AuthProvider'

export const registerAction = (data) => (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST })

  try {
    console.log('reaching register reducer function')
    // const response = await axios.post(`${API_URL}/user/signup`)
    // const data = response.data
    console.log(JSON.stringify(data, null, 2))
    console.log('finished')
    // set async storage properties

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.information })
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
  }
}

export const loginAction = (formValues) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST })

  try {
    console.log('Thunk funciton reached')
    const response = await axios.post(`${API_URL}/user/login`, formValues)
    const data = response.data

    // set credentials to async storage
    await AsyncStorage.setItem('token', data.jwt)
    await AsyncStorage.setItem('email', data.information.email)
    await AsyncStorage.setItem('password', data.information.password) // TODO: might have to delete

    dispatch({ type: USER_REGISTER_SUCCESS, payload: data.information })
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message })
  }
  dispatch({ type: USER_REGISTER_REQUEST })
}
