import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native'
import { Text } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
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
            position: 'absolute',
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            bottom: '75%',
          }}
        >
          <Header style={[styles.header]}>Create{'\n'}Account</Header>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            <Header
              style={{
                fontSize: 19,
                color: 'white',
                fontStyle: 'italic',
              }}
            >
              Skip
            </Header>
          </TouchableOpacity>
        </View>

        {/* Email input */}
        {/* <TextInput
          style={[styles.body, { marginTop: 230 }]}
          placeholder="Email Address or Phone Number"
        /> */}
        <View
          style={[styles.row, { marginTop: 230, justifyContent: 'center' }]}
        >
          <Icon
            name="envelope"
            color="#BB6BD9"
            size={15}
            style={{
              top: '30%',
              position: 'absolute',
              justifyContent: 'flex-start',
              // backgroundColor: 'blue',
              zIndex: 2,
              width: '90%',
            }}
          />
          {/* text container */}
          <View
            style={[
              styles.body,
              {
                // backgroundColor: 'blue',
                width: '90%',
              },
            ]}
          >
            <TextInput
              style={[
                {
                  width: '94%',
                  alignSelf: 'flex-start',
                  // backgroundColor: 'red',
                  left: '9%',
                  top: '25%',
                },
              ]}
              placeholder="Email Address or Phone Number"
            />
          </View>
        </View>
        {/* <TextInput
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
        /> */}

        {/* Address input */}
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <Icon
            name="map-marker"
            color="#BB6BD9"
            size={18}
            style={{
              top: '30%',
              position: 'absolute',
              justifyContent: 'flex-start',
              zIndex: 2,
              // backgroundColor: 'blue',
              width: '90%',
            }}
          />
          {/* text container */}
          <View
            style={[
              styles.body,
              {
                // backgroundColor: 'blue',
                width: '90%',
              },
            ]}
          >
            <TextInput
              style={[
                {
                  width: '94%',
                  alignSelf: 'flex-start',
                  // backgroundColor: 'red',
                  left: '9%',
                  top: '25%',
                },
              ]}
              placeholder="Address"
            />
          </View>
        </View>
        {/* <TextInput style={[styles.body]} placeholder="Address" /> */}
        {/* <TextInput label="Address" style={styles.input} /> */}

        {/* Password */}
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <Icon
            name="key"
            color="#BB6BD9"
            size={18}
            style={{
              top: '30%',
              position: 'absolute',
              justifyContent: 'flex-start',
              zIndex: 2,
              // backgroundColor: 'blue',
              width: '90%',
            }}
          />
          {/* text container */}
          <View
            style={[
              styles.body,
              {
                // backgroundColor: 'blue',
                width: '90%',
              },
            ]}
          >
            <TextInput
              style={[
                {
                  width: '94%',
                  alignSelf: 'flex-start',
                  // backgroundColor: 'red',
                  left: '9%',
                  top: '25%',
                },
              ]}
              placeholder="Password"
            />
          </View>
        </View>
        {/* <TextInput style={[styles.body]} placeholder="Password" /> */}
        {/* <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.input}
          secureTextEntry
        /> */}

        {/* Confirm password */}
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <Icon
            name="key"
            color="#BB6BD9"
            size={18}
            style={{
              top: '30%',
              position: 'absolute',
              justifyContent: 'flex-start',
              zIndex: 2,
              // backgroundColor: 'blue',
              width: '90%',
            }}
          />
          {/* text container */}
          <View
            style={[
              styles.body,
              {
                // backgroundColor: 'blue',
                width: '90%',
              },
            ]}
          >
            <TextInput
              style={[
                {
                  width: '94%',
                  alignSelf: 'flex-start',
                  // backgroundColor: 'red',
                  left: '9%',
                  top: '25%',
                },
              ]}
              placeholder="Confirm password"
            />
          </View>
        </View>
        {/* <TextInput style={styles.body} placeholder="Confirm Password" /> */}
        {/* <TextInput
          label="Confirm password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.input}
          secureTextEntry
        /> */}

        {/* sign up button */}
        <Button
          btnText="Sign up"
          btnColor="#BB6BD9"
          btnTextColor="white"
          btnTop="2.5%"
          onPress={onSignUpPressed}
        />
        {/* <Button
          onPress={onSignUpPressed}
          btnTextColor="white"
          btnColor="#BB6BD9"
          btnText="Sign up"
        >
          Sign Up
        </Button> */}

        <View
          style={[
            styles.row,
            { top: '12%', position: 'relative', width: '85%' },
          ]}
        >
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
  header: {
    color: 'white',
    fontSize: 30,
    marginTop: '15%',
    fontWeight: '700',
  },
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
    marginTop: 2,
  },
  input: {
    // position: 'relative',
    top: '30%',
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  body: {
    height: 30,
    margin: 1,
    borderWidth: 1,
    // padding: 10,
    borderColor: '#fff',
    borderBottomColor: '#BB6BD9',
    // position: 'relative',
    width: '85%',
    top: '2%',
    marginBottom: 30,
    // borderColor: 'rgba(0, 0, 0, .5)',
  },
})
