import validator from 'validator'

/**
 *
 * @param {*} formValues  - login form values
 * @returns true if all the values follow the correct syntax
 */
const onValidLogin = (formValues) => {
  const { email, password } = formValues
  let isValid = true
  if (email && emailValidator(email)) isValid = false
  if (password && passwordValidator(password)) isValid = false
  return isValid
}

/**
 *
 * @param {*} formValues - register form values
 * @returns true if all the values follow the correct syntax
 */
const onValidSignup = (formValues) => {
  const { fullname, email, address, password } = formValues
  let isValid = true
  if (fullname && !nameValidator(fullname)) isValid = false
  if (email && !emailValidator(email)) isValid = false
  if (address && !addressValidator(address)) isValid = false
  if (password && !passwordValidator(password)) isValid = false
  return isValid
}

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
