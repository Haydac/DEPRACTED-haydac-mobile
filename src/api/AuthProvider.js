import axios from 'axios'
import { API_URL } from '@env'
/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const login = async (formValues) => {
  try {
    const { data } = await axios.post(`${API_URL}/user/login`, formValues)
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
const signup = async (formValues) => {
  try {
    const { data } = await axios.post(`${API_URL}/user/signup`, formValues)
    return data
  } catch (error) {
    throw error
  }
}

export { login, signup }
