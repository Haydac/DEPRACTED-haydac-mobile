import React, { useState } from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native'
import { emailValidator } from '../../helpers/loginValidation'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import InputField from '../../components/forms/InputField'
import Brand from '../../components/core/Brand'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')

  const handleResetPassword = () => {
    console.log('handle reset password')
  }

  return (
    <Screen style={styles.container}>
      <Brand />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
