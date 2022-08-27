import React, { useState } from 'react'
import { ImageBackground, Text, StyleSheet,View } from 'react-native'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Desgin from '../../assets/background/design-icon.svg'
import { backgroundColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')

  const handleResetPassword = () => {
    // call reset API
  }

  return (
    <Screen style={styles.container}>
      <View><View style={styles.designsvg}><Desgin/></View></View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    
  },

  designsvg:{

   alignItems: 'flex-end',
   borderStyle:'solid',
  justifyContent: 'flex-end',
   width: '100%',
   height:'102.4%',
   marginLeft:'-0.1%'
 
  },
  
  
})
