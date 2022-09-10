import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Foundation } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Button from '../../components/buttons/Button'
import VerifiyIcon from '../../components/core/VerifiyIcon'
import DesignIcon from '../../components/core/DesignIcon'

import { theme } from '../../core/theme' //provides theme/design for the componenet

export default function VerificationScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [activeField, setActiveField] = useState('')

  const keyIcon = (
    <Foundation
      name="key"
      color={activeField == 'Code' ? theme.colors.primary : '#A5A5A5'}
      size={20}
    />
  )

  return (
    <Screen style={styles.container}>
      <VerifiyIcon style={styles.verifiysvg} />

      <Text style={styles.instructions}>
        Please enter your verification code
      </Text>

      <Text style={styles.pageinstructions}>
        A verification code has been sent to your email{'\n'}
        please enter it below
      </Text>

      <InputField
        width={'80%'}
        height={45}
        id="Code"
        placeHolder="Verification code"
        placeholderTextColor="#C2C2C2"
        leftIcon={keyIcon}
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
        onPress={() => navigation.navigate('NewPasswordScreen')}
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
  verifiysvg: {
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
