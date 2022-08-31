import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Background from '../../components/core/Background'
import Separator from '../../components/Separator'
import EmailPhoneField from '../../components/forms/EmailPhoneField'

import { theme } from '../../core/theme'

import { signup } from '../../api/AuthProvider'
import { signupValidator } from '../../helpers/validation'
import {
  emailValidator,
  phoneValidator,
  passwordValidator,
} from '../../helpers/validation'

export default function RegisterScreen({ navigation }) {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    password_confirmation: '',
  })
  const [errors, setErrors] = useState({})
  const [activeField, setActiveField] = useState('')

  // button states
  const [signUpBtnColor, setSignUpBtnColor] = useState(theme.colors.primary)
  const [signUpBtnTextColor, setSignUpBtnTextColor] = useState('#fff')

  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('#A5A5A5')

  const activeIconColor = theme.colors.primary
  const inactiveIconColor = '#A5A5A5'

  const validate = () => {
    Keyboard.dismiss()

    if (!emailValidator(formValues.email)) {
      handleError('Email is not valid', 'email')
    }

    if (!phoneValidator(formValues.phone)) {
      handleError('Phone is not valid', 'phone')
    }

    if (!passwordValidator(formValues.password)) {
      handleError('Password is not valid', 'password')
    }

    if (!passwordValidator(formValues.password_confirmation)) {
      handleError('Password confirmation is not valid', 'password_confirmation')
    }

    if (formValues.password !== formValues.password_confirmation) {
      handleError('Password fields should match', 'password_confirmation')
    }
  }

  const updateFormValue = (value, formField) => {
    setFormValues((prevValues) => ({ ...prevValues, [formField]: value }))
  }

  const handleError = (errorMessage, formField) => {
    setErrors((prevErrors) => ({ ...prevErrors, [formField]: errorMessage }))
  }

  const nameIcon = (
    <MaterialIcons
      name="person"
      color={activeField == 'Name' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

  const addressIcon = (
    <MaterialIcons
      name="location-pin"
      color={activeField == 'Address' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

  const passwordIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'Password' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

  const passwordConfirmIcon = (
    <MaterialIcons
      name="lock"
      color={
        activeField == 'PasswordConfirm' ? activeIconColor : inactiveIconColor
      }
      size={20}
    />
  )

  const formWidth = '100%'
  const formItemHeight = 45

  /**
   * Sends values from form to the server
   */
  const onSignUpPressed = async () => {
    // could be email or phone

    // validate form values before sending to server
    try {
      signupValidator(formValues).then(async () => {
        const user = await signup(formValues)
        if (user?.success) {
          navigation.navigate('LoginScreen')
        }
      })
    } catch (error) {
      throw error
    }
  }

  // Keyboard listener
  // TODO: maybe there is a way to refactor into a component

  useEffect(() => {
    const showObserver = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow
    )
    const hideObserver = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide
    )

    return () => {
      if (showObserver.removeListener) {
        showObserver.removeListener('keyboardDidShow', _keyboardDidShow)
      }
      if (hideObserver.removeListener) {
        hideObserver.removeListener('keyboardDidHide', _keyboardDidHide)
      }
    }
  }, [])

  const [isKeyboardOpen, setIsKeyBoardOpen] = useState(false)
  const _keyboardDidShow = () => setIsKeyBoardOpen(true)
  const _keyboardDidHide = () => setIsKeyBoardOpen(false)

  console.log(formValues)

  return (
    <Background
      imageSource={
        isKeyboardOpen ? null : require('../../assets/background/signup.png')
      }
    >
      <Screen>
        <View style={styles.content}>
          {/* Login header :  */}
          <View style={styles.header}>
            {isKeyboardOpen ? null : (
              <Header style={styles.headerMessage}>Create{'\n'}Account</Header>
            )}
            <Button
              text="Skip"
              width="6%"
              height="5%"
              style={styles.skipBtn}
              textStyle={styles.skipBtnText}
              textColor={isKeyboardOpen ? theme.colors.primary : '#fff'}
              onPress={() => navigation.navigate('HomeTabs')}
            />
          </View>

          <View
            style={[
              styles.loginFormContainer,
              isKeyboardOpen ? { bottom: -20 } : {},
            ]}
          >
            {/* Full name input */}
            <InputField
              id="Name"
              width={formWidth}
              height={formItemHeight}
              placeHolder="Full name"
              leftIcon={nameIcon}
              inputFieldStyle={[styles.inputFieldStyle]}
              text={formValues.fullname}
              setText={(text) => updateFormValue(text, 'fullname')}
              setActiveField={setActiveField}
            />

            {/* Email/Phone input */}
            <EmailPhoneField
              width={formWidth}
              height={formItemHeight}
              emailPhoneFieldStyle={styles.emailPhoneFieldStyle}
              inputFieldStyle={styles.inputFieldStyle}
              setActiveField={setActiveField}
              setEmail={(text) => updateFormValue(text, 'email')}
              setPhone={(text) => updateFormValue(text, 'phone')}
              dropDownStyle={styles.dropDownStyle}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              dropDownTextStyle={styles.dropDownTextStyle}
              dropDownLabelStyle={styles.dropDownLabelStyle}
            />

            {/* Address input */}
            <InputField
              id="Address"
              width={formWidth}
              height={formItemHeight}
              placeHolder="Address"
              leftIcon={addressIcon}
              inputFieldStyle={[styles.inputFieldStyle]}
              text={formValues.address}
              setText={(text) => updateFormValue(text, 'address')}
              setActiveField={setActiveField}
            />

            {/* Passowrd input */}
            <InputField
              id="Password"
              width={formWidth}
              height={formItemHeight}
              placeHolder="Password"
              leftIcon={passwordIcon}
              inputFieldStyle={[styles.inputFieldStyle]}
              text={formValues.password}
              setText={(text) => updateFormValue(text, 'password')}
              secureTextEntry
              setActiveField={setActiveField}
            />

            {/* Passowrd confirmation input */}
            <InputField
              id="PasswordConfirm"
              width={formWidth}
              height={formItemHeight}
              placeHolder="Confirm Password"
              leftIcon={passwordConfirmIcon}
              inputFieldStyle={[styles.inputFieldStyle]}
              text={formValues.password_confirmation}
              setText={(text) => updateFormValue(text, 'password_confirmation')}
              secureTextEntry
              setActiveField={setActiveField}
            />

            {/* Forgot password button */}
            <Button
              text="Forgot password?"
              height={formItemHeight}
              style={styles.forgotPasswordBtn}
              textStyle={styles.forgotPasswordBtnText}
              textColor={theme.colors.primary}
              onPress={() => navigation.navigate('ResetPasswordScreen')}
            />

            {/* Sign up button */}
            <Button
              text="Sign up"
              width={formWidth}
              height={formItemHeight}
              backgroundColor={signUpBtnColor}
              style={styles.signUpBtn}
              textStyle={styles.signUpBtnText}
              textColor={signUpBtnTextColor}
              onPress={onSignUpPressed}
              onPressIn={() => {
                setSignUpBtnColor('#fff')
                setSignUpBtnTextColor('#A5A5A5')

                setLoginBtnColor(theme.colors.primary)
                setLoginBtnTextColor('#fff')
              }}
              onPressOut={() => {
                setSignUpBtnColor(theme.colors.primary)
                setSignUpBtnTextColor('#fff')

                setLoginBtnColor('#fff')
                setLoginBtnTextColor('#A5A5A5')
              }}
            />

            {/** Separator */}
            <Separator
              width={formWidth}
              text="Or"
              lineColor="#A5A5A5"
              textColor="#A5A5A5"
              style={{ marginTop: 12 }}
            />

            {/* Log in button */}
            <Button
              text="Log in"
              width={formWidth}
              height={formItemHeight}
              backgroundColor={loginBtnColor}
              style={styles.loginBtn}
              textStyle={styles.loginBtnText}
              textColor={loginBtnTextColor}
              onPress={() => navigation.navigate('LoginScreen')}
              onPressIn={() => {
                setLoginBtnColor(theme.colors.primary)
                setLoginBtnTextColor('#fff')

                setSignUpBtnColor('#fff')
                setSignUpBtnTextColor('#A5A5A5')
              }}
              onPressOut={() => {
                setLoginBtnColor('#fff')
                setLoginBtnTextColor('#A5A5A5')

                setSignUpBtnColor(theme.colors.primary)
                setSignUpBtnTextColor('#fff')
              }}
            />
          </View>
        </View>
      </Screen>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
    flex: 1,
    flexDirection: 'row',
  },
  loginFormContainer: {
    width: '80%',
    height: '50%',
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerMessage: {
    color: 'white',
    fontSize: 30,
    marginTop: '10%',
    marginLeft: '5%',
    fontWeight: '700',
  },
  skipBtn: {
    margin: '4%',
    position: 'absolute',
    top: 10,
    right: 0,
  },
  skipBtnText: {
    fontStyle: 'italic',
    fontSize: 19,
  },
  inputFieldStyle: {
    marginVertical: 10,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  emailPhoneFieldStyle: {
    marginVertical: 10,
  },
  dropDownStyle: {
    borderColor: theme.colors.primary,
  },
  dropDownContainerStyle: {
    width: 60,
    height: 28,
    marginTop: -4,
    alignSelf: 'flex-start',
  },
  dropDownTextStyle: {
    color: '#fff',
  },
  dropDownLabelStyle: {
    color: '#fff',
  },
  forgotPasswordBtn: {
    alignSelf: 'flex-end',
  },
  forgotPasswordBtnText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
  },
  loginBtn: {
    marginTop: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  loginBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  signUpBtn: {
    marginTop: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  signUpBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
