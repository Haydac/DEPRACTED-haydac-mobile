import validator from 'validator'

/**
 * Depracated - Validation is now handled on the login form itself
 * @param {*} formValues  - login form values
 * @returns true if all the values follow the correct syntax
 */
const onValidLogin = (formValues) => {
  const { email, password } = formValues
  let isValid = true
  if (email && !emailValidator(email)) isValid = false
  if (password && !passwordValidator(password)) isValid = false
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
const nameValidator = (value) => {
  let name = value.replace(/\s/g, '')
  return name && validator.isAlpha(name.trim())
}

/**
 * Validates email input
 * @param {*} email
 * @returns error messsage if email is invalid
 */
const emailValidator = (value) => {
  const email = value
  return email && validator.isEmail(email.trim())
}

/**
 * Validates password input
 * @param {*} password
 * @returns error messsage if passowrd is invalid
 */
const passwordValidator = (value) => {
  const password = value.replace(/\s/g, '')
  return password && password.length > 5
}

export {
  onValidLogin,
  onValidSignup,
  nameValidator,
  emailValidator,
  passwordValidator,
}
