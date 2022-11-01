import axios from 'axios'
import { API_URL, TEST_API_URL } from '@env'
import * as SecureStore from 'expo-secure-store' // store user token

/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const loginApi = async (formValues) => {
  try {
    const response = await axios.post(`${TEST_API_URL}/user/login`, formValues)
    return response
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
    const response = await axios.post(`${TEST_API_URL}/user/signup`, formValues)
    return response
  } catch (error) {
    throw error
  }
}

export { loginApi, registerApi }
