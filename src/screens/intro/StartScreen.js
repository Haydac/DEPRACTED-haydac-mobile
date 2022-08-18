import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Button from '../../components/buttons/Button'
import Brand from '../../components/core/Brand'
import Background from '../../components/core/Background'

export default function StartScreen({ navigation }) {
  return (
    <Background
      imageSource={require('../../assets/background/start-screen.png')}
    >
      <View style={styles.container}>
        <Brand logoStyle={styles.logoStyle} />
        <Text style={[styles.welcomeText]}>
          Bring home closer with a {'\n'} single click
        </Text>
        <Button
          text="Get Started"
          width="80%"
          height="5%"
          borderRadius={20}
          backgroundColor="#fff"
          style={styles.getStartedBtn}
          textStyle={styles.getStartedBtnText}
          textColor="#000"
          textColorPressed="#000"
          rightIcon={
            <FontAwesome5
              style={styles.iconStyle}
              name="arrow-right"
              size={20}
            />
          }
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  getStartedBtn: {
    position: 'absolute',
    bottom: 40,
  },
  getStartedBtnText: {
    fontWeight: 'normal',
    fontSize: 15,
    lineHeight: 26,
  },
  welcomeText: {
    marginTop: 30,
    marginBottom: 100,
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
  },
  iconStyle: {
    color: 'black',
  },
  logoStyle: {},
})
