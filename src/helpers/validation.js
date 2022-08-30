import validator from 'validator'

/**
 * This checks if the phone or email and password is of valid format.
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const loginValidator = (formValues) => {
  if (passwordValidator(formValues.password)) {
    return emailValidator(formValues.email) || phoneValidator(formValues.phone)
  }
  return false
}

/**
 * This function validates form values for signup form.
 * @param {*} formValues - object containing user data
 * @return {message, data} - an object conatining a message as response from the api
 * and data - as stored user data in DB
 */
const signupValidator = async (formValues) => {
  const password = formValues.password,
    confirmPassword = formValues.password_confirmation

  if (passwordValidator(password) && password === confirmPassword) {
    return (
      nameValidator(formValues.fullname) &&
      (emailValidator(formValues.email) || phoneValidator(formValues.phone)) &&
      addressValidator(formValues.address)
    )
  }
  return false
}

/**
 * Helper methods
 */

const nameValidator = (fullname) => {
  return fullname && validator.isAlpha(fullname)
}

const addressValidator = (address) => {
  return address && validator.isAlphanumeric(address)
}

/**
 * Validates email input
 * @param {*} email
 * @returns true if email is valid and false otherwise
 */
const emailValidator = (email) => {
  return email && validator.isEmail(email)
}

/**
 * Validates phone input
 * @param {*} phone
 * @returns true if phone is valid and false otherwise
 */
const phoneValidator = (phone) => {
  return phone && phone && validator.isMobilePhone(phone)
}

/**
 * Validates password input
 * @param {*} password
 * @returns true if password is valid and false otherwise
 */
const passwordValidator = (password) => {
  return password && validator.isAlphanumeric(password)
}

export {
  loginValidator,
  signupValidator,
  emailValidator,
  phoneValidator,
  nameValidator,
  addressValidator,
}
