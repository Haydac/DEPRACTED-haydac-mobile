import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login.png')}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <BackButton goBack={navigation.goBack} /> */}
        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            alignItems: 'center',
            bottom: '50%',
          }}
        >
          <Header style={{ color: 'white', fontSize: 30, marginTop: '45%' }}>
            Create{'\n'}Account
          </Header>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            {/* <Text>Skip</Text> */}
            <Header
              style={{
                fontSize: 19,
                marginTop: '130%',
                color: 'white',
                fontStyle: 'italic',
                textDecorationLine: 'underline',
              }}
            >
              Skip
            </Header>
          </TouchableOpacity>
        </View>

        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.input}
        />

        <TextInput label="Address" style={styles.input} />

        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.input}
          secureTextEntry
        />

        <TextInput
          label="Confirm password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.input}
          secureTextEntry
        />

        {/* sign up button */}
        <Button
          onPress={onSignUpPressed}
          btnTextColor="white"
          btnColor="#BB6BD9"
          btnText="Sign up"
        >
          Sign Up
        </Button>

        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '96%',
    marginTop: 15,
  },
  input: {
    // position: 'relative',
    top: '30%',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
