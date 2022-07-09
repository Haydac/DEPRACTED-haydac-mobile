import React, { useState } from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native'
import { emailValidator } from '../../helpers/emailValidator'
import BackButton from '../../components/buttons/BackButton'
import Header from '../../components/Header'
import TextInput from '../../components/forms/InputField'
import Brand from '../../components/core/Brand'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    navigation.navigate('LoginScreen')
  }

  return (
    <ImageBackground
      source={require('../../assets/login.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <BackButton goBack={navigation.goBack} />
      <Brand />
      <Header>Restore Password</Header>
      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Text>Reset password screen</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})