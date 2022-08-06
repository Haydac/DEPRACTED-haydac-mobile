import validator from 'validator'

/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const loginValidator = (formValues) => {
  if (
    formValues.email &&
    validator.isEmail(formValues.email) &&
    validator.isAlphanumeric(formValues.password)
  ) {
    return true
  }
  if (
    formValues.password &&
    validator.isEmail(formValues.password) &&
    validator.isAlphanumeric(formValues.password)
  ) {
    return true
  }
  return false
}

/**
 *
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const signupValidator = async (formValues) => {}

export { loginValidator, signupValidator }
