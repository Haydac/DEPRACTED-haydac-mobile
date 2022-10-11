import validator from 'validator'

const onValidLogin = ({ email, password }) => {
  return emailValidator(email) ** passwordValidator(password)
}

const onValidSignup = (formValues) => {}

/*
 * HELPER METHODS
 */

/**
 * Validates fullname input
 * @param {*} fullname
 * @returns error messsage if fullname is invalid
 */
const nameValidator = (name) => {
  return name && validator.isAlpha(name)
}

/**
 * Validates address input
 * @param {*} address
 * @returns error messsage if address is invalid
 */
const addressValidator = (address) => {
  return address && validator.isAlpha(address)
}

/**
 * Validates email input
 * @param {*} email
 * @returns error messsage if email is invalid
 */
const emailValidator = (email) => {
  return email && validator.isEmail(email)
}

/**
 * Validates password input
 * @param {*} password
 * @returns error messsage if passowrd is invalid
 */
const passwordValidator = (password) => {
  return password && password.length > 5
}

export { onValidLogin, onValidSignup }
