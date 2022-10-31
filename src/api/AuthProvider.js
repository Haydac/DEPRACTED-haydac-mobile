import axios from 'axios'
import { API_URL } from '@env'
import * as SecureStore from 'expo-secure-store' // store user token

/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const login = async (formValues) => {
  let data
  try {
    data = await axios.post(`http://127.0.0.1:3000/user/login`, formValues)
    return data
  } catch (error) {
    throw error
  }
}

/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const registerApi = async (formValues) => {
  try {
    console.log(formValues)
    const { data } = await axios.post(
      `http://127.0.0.1:3000/user/signup`,
      formValues
    )
    return data
  } catch (error) {
    throw error
  }
}

export { login, registerApi }
