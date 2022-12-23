import validator from 'validator'

/**
 * Helper methods
 */

/**
 * Validates fullname input
 * @param {*} fullname
 * @returns error messsage if fullname is invalid
 */
const nameValidator = (fullname) => {
  if (!fullname) {
    return 'Name is required'
  }

  if (!validator.isAlpha(fullname)) {
    return 'Name should only contain letters'
  }

  return ''
}

/**
 * Validates address input
 * @param {*} address
 * @returns error messsage if address is invalid
 */
const addressValidator = (address) => {
  if (!address) {
    return 'Address is required'
  }
  return ''
}

/**
 * Validates email input
 * @param {*} email
 * @returns error messsage if email is invalid
 */
const emailValidator = (email) => {
  if (!email) {
    return 'Email is required'
  }

  if (!validator.isEmail(email)) {
    return 'Email is invalid'
  }

  return ''
}

/**
 * Validates password input
 * @param {*} password
 * @returns error messsage if passowrd is invalid
 */
const passwordValidator = (password) => {
  if (!password) {
    return 'Password is required'
  }

  if (!validator.isAlphanumeric(password)) {
    return 'Password should contain letters and numbers'
  }

  return ''
}

export { emailValidator, nameValidator, addressValidator, passwordValidator }
