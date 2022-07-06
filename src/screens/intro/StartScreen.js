import React from 'react'
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Button from '../../components/buttons/Button'
import Brand from '../../components/core/Brand'
import Background from '../../components/core/Background'
import { theme } from '../../core/theme'

export default function StartScreen({ navigation }) {
  return (
    <Background imageSource={require('../../assets/start_screen.png')}>
      <View style={styles.container}>
        <Brand logoStyle={styles.logoStyle} />
        <Text style={[styles.welcomeText]}>
          Bring home closer with a {'\n'} single click...
        </Text>
        <Button
          width="80%"
          height="5%"
          text="Get Started"
          borderRadius={20}
          backgroundColor="#fff"
          style={styles.getStartedBtn}
          textStyle={styles.getStartedBtnText}
          icon={
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
    top: Dimensions.get('window').height - 50,
    bottom: 0,
  },
  getStartedBtnText: {
    color: '#000',
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
