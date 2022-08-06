import validator from 'validator'

/**
 * This checks if the phone or email and password is of valid format.
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
    formValues.phone &&
    validator.isMobilePhone(formValues.phone) &&
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
