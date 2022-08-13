import axios from 'axios'

/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const login = async (formValues) => {
  try {
    const { data } = await axios.post(
      'https://haydac-server.uc.r.appspot.com/user/login',
      formValues
    )
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
    const { data } = await axios.post(
      'https://haydac-server.uc.r.appspot.com/user/signup',
      formValues
    )
    return data
  } catch (error) {
    throw error
  }
}

export { login, signup }
