import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Button from '../../components/buttons/Button'
import ResetIcon from '../../components/core/ResetIcon'
import DesignIcon from '../../components/core/DesignIcon'

import { theme } from '../../core/theme' //provides theme/design for the componenet

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [activeField, setActiveField] = useState('')

  const emailIcon = (
    <MaterialIcons
      name="email"
      color={activeField == 'Email' ? theme.colors.primary : '#A5A5A5'}
      size={20}
    />
  )

  return (
    <Screen style={styles.container}>
      <ResetIcon style={styles.resetsvg} />

      <Text style={styles.instructions}>Please enter your recovery email</Text>

      <Text style={styles.pageinstructions}>
        A link would be send to the email entered to activate{'\n'}
        the create a new password option
      </Text>

      <InputField
        width={'80%'}
        height={45}
        id="Email"
        placeHolder="Email"
        placeholderTextColor="#C2C2C2"
        leftIcon={emailIcon}
        inputFieldStyle={[{ marginBottom: 7 }, styles.inputFieldStyle]}
        text={email}
        setText={setEmail}
        activeField={activeField}
        setActiveField={setActiveField}
      />
      <Button
        text="Next"
        width={'50%'}
        height={45}
        borderRadius={15}
        backgroundColor={theme.colors.primary}
        style={styles.nextbtn}
        textStyle={styles.nextBtnText}
        textColor={'#fff'}
        onPress={() => navigation.navigate('VerificationScreen')}
      />

      <DesignIcon style={styles.iconsvg} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  //place the svg at the bottom right of the screen
  iconsvg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  //display the icon for this page in the center
  resetsvg: {
    marginTop: '10%',
    alignSelf: 'center',
  },
  //place text on screen
  instructions: {
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000',
  },
  //place other set of instuctions on screen
  pageinstructions: {
    marginTop: '7%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    color: '#858585',
  },
  //place and design the button
  nextbtn: {
    marginTop: '15%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  //text for the button
  nextBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  //the line for the input
  inputFieldStyle: {
    marginTop: '10%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9',
  },
})
