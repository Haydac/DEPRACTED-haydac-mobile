import React, { useState } from 'react'
import {  Text, StyleSheet,View, } from 'react-native'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Desgin from '../../assets/background/design-icon.svg'
import Reset from '../../assets/background/reset.svg'
import Button from '../../components/buttons/Button'

import { theme } from '../../core/theme' //provides theme/design for the componenet


export default function VerificationScreen({ navigation }) {
  const [email, setEmail] = useState('')

  
  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('white')


  const handleResetPassword = () => {
    // call reset API
  }

  return (
    
    <Screen style={styles.container}>

      
<Button
text="next"
textColor={loginBtnTextColor}
backgroundColor={loginBtnColor}
style={styles.nextbtn}
textStyle={styles.NextbtnText}


 />
      

        

       

    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    textAlign:'center'
    
  },


  //place the svg at the bottom right of the screen
  designsvg:{
   alignItems: 'flex-end',
   borderStyle:'solid',
  justifyContent: 'flex-end',
   width: '100%',
   height:'104.2%',
   marginLeft:'-0.1%',
   position:'absolute'
 
  },


//display the icon for this page in the center 
  resetsvg:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    height:'80%',
    position:'absolute',
    
  
  },
//place text on screen
instructions:{
  textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  position:'absolute',
  color:'black',
  marginLeft:'20%',
  marginTop:'104%'
},
//place other set of instuctions on screen 
pageinstructions:{
  textAlign:'center',
  justifyContent:'center',
  position:'absolute',
  color:'black',
  marginLeft:'15%',
  marginTop:'110%',
  fontSize:12
},

//place and design the button 
nextbtn:{
  marginTop:600,
  borderRadius:7,
  borderWidth: 1,
  borderColor: theme.colors.primary,
  position:'absolute',
  marginLeft:'23%',
  height:45,
  width:'50.62%',
  backgroundColor:'#BB6BD9'
  

},
//text for the utton 
NextbtnText: {
  fontWeight: 'bold',
  fontSize: 15,
  lineHeight: 26,
  
},

  
  
})
