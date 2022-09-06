import React, { useState } from 'react'
import { Text, StyleSheet,View, } from 'react-native'
import Verifyicon from '../../components/core/verifyicon'
import Designicon from '../../components/core/Designicon'
import Padlock from '../../components/core/padlock'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Button from '../../components/buttons/Button'


import { theme } from '../../core/theme' //provides theme/design for the componenet


export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('')
  const [activeField, setActiveField] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  

  //button states
  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('white')
  const formWidth = '75%'
  const formItemHeight = 45

  const activeIconColor = theme.colors.primary
  const inactiveIconColor = '#A5A5A5'


  const passwordIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'Password' ? '#BB6BD9' : '#A5A5A5'}
      size={20}
    />
  )


  const passwordConfirmIcon = (
    <MaterialIcons
      name="lock"
      color={
        activeField == 'PasswordConfirm' ? activeIconColor : inactiveIconColor
      }
      size={20}
    />
  )
 

  const handleResetPassword = () => {
    // call reset API
  }

  return (
    
    <Screen style={styles.container}>






 <View style={styles.resetsvg}>
    <Padlock/>
    </View>

          

       

 <View  style={styles.iconsvg}>
    <Designicon/> 
    </View>


 
  
     <Text style={styles.instructions}>Please enter your new passord</Text> 
     <Text style={styles.pageinstructions}>Make sure it is not the same as your old passowrd</Text>


<View style={styles.passwordbox}>
<View>
<InputField
              width={formWidth}
              height={formItemHeight}
              id="Password"
              placeHolder="Password"
              placeholderTextColor="#C2C2C2"
              leftIcon={passwordIcon}
              inputFieldStyle={styles.inputFieldStyle1}
              text={password}
              setText={setPassword}
              secureTextEntry
              activeField={activeField}
              setActiveField={setActiveField}
            />


<InputField
              width={formWidth}
              height={formItemHeight}
              id="PasswordConfirm"
              placeHolder="Confirm Password"
              placeholderTextColor="#C2C2C2"
              leftIcon={passwordConfirmIcon}
              inputFieldStyle={styles.inputFieldStyle2}
              text={passwordConfirm}
              setText={setPasswordConfirm}
              secureTextEntry
              activeField={activeField}
              setActiveField={setActiveField}
            />
            </View>



</View>



<View>
<Button
text="Submit"
textColor={loginBtnTextColor}
backgroundColor={loginBtnColor}
style={styles.nextbtn}
textStyle={styles.NextbtnText}
onPress={() => navigation.navigate('LoginScreen')}
 />
 </View>
        

       

    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    
    
  },


  //place the svg at the bottom right of the screen
 iconsvg:{
   marginTop:'160.4%',
   marginLeft:'65.5%',
   position:'absolute'

 },


//display the icon for this page in the center 
  resetsvg:{
   marginTop:'12.74%',
   marginLeft:'25%',
   justifyContent:'center',
   position:'absolute',
   alignItems:'center',
   textAlign:'center'
  
  },
//place text on screen
instructions:{
  textAlign:'center',
  alignItems:'center',
  justifyContent:'center',
  position:'absolute',
  color:'black',
  marginLeft:'20%',
  marginTop:'75%'
},
//place other set of instuctions on screen 
pageinstructions:{
  textAlign:'center',
  justifyContent:'center',
  position:'absolute',
  color:'black',
  marginLeft:'15%',
  marginTop:'80%',
  fontSize:12
},

passwordbox:{
  
  width:'100%',
  height:45,
  marginLeft:'30%',
  marginTop:'120%',
  position: 'relative'
   
},


//place and design the button 
nextbtn:{
  marginTop:40,
  borderRadius:7,
  borderWidth: 1,
  borderColor: theme.colors.primary,
  position:'absolute',
  marginLeft:'24%',
  height:45,
  width:'50.62%',
  backgroundColor:'#BB6BD9'
  

},
//text for the button 
NextbtnText: {
  fontWeight: 'bold',
  fontSize: 15,
  lineHeight: 26,
  
},

// START OF DROP DOWN MENU DESIGN 
dropDownContainerStyle: {
  width: 60,
  height: 28,
  marginTop: -4,
  alignSelf: 'flex-start',
  marginLeft:'-20%'
},


dropDownLabelStyle: {
  color: '#fff',
},
  


dropDownTextStyle: {
  color: '#fff',
},

//the line for the input
inputFieldStyle1: {
  position: 'relative',
  borderBottomWidth: 1,
  borderBottomColor: '#BB6BD9', 
  marginLeft:'-20%',
  bottom:'8%',
  marginTop:'-17%'
 
},

inputFieldStyle2: {
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9', 
    marginLeft:'-20%',
    bottom:'8%',
    marginTop:'8%'
   
  },
})
