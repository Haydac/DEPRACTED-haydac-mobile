import React, { useState } from 'react'
import { Text, StyleSheet,View, } from 'react-native'
import Resertlogo from '../../components/core/Resertlogo'
import Designicon from '../../components/core/Designicon'
import EmailPhoneField from '../../components/forms/EmailPhoneField'
import Gradient from 'react-native-linear-gradient'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Button from '../../components/buttons/Button'


import { theme } from '../../core/theme' //provides theme/design for the componenet


export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [activeField, setActiveField] = useState('')

  //button states
  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('white')
  const formWidth = '100%'
  const formItemHeight = 45

 

  const handleResetPassword = () => {
    // call reset API
  }

  return (
    
    <Screen style={styles.container}>






 <View style={styles.resetsvg}>
    <Resertlogo/>
    </View>

          

       

 <View  style={styles.iconsvg}>
    <Designicon/> 
    </View>


 
  
     <Text style={styles.instructions}>Please enter a recovery email ID/Phone.</Text> 
     <Text style={styles.pageinstructions}>A link would be send to the email entered to activate{'\n'}
the create a new password option.</Text>


<View style={styles.recoveryemail}>

<EmailPhoneField
              width={formWidth}
              height={formItemHeight}
              emailPhoneFieldStyle={styles.emailPhoneFieldStyle}
              inputFieldStyle={styles.inputFieldStyle}
              setActiveField={setActiveField}
              dropDownStyle={styles.dropDownStyle}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              dropDownTextStyle={styles.dropDownTextStyle}
             dropDownLabelStyle={styles.dropDownLabelStyle}
            />


</View>



<View>
<Button
text="next"
textColor={loginBtnTextColor}
backgroundColor={loginBtnColor}
style={styles.nextbtn}
textStyle={styles.NextbtnText}
onPress={() => navigation.navigate('VerificationScreen')}
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
   marginTop:'30%',
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
  marginTop:'90%'
},
//place other set of instuctions on screen 
pageinstructions:{
  textAlign:'center',
  justifyContent:'center',
  position:'absolute',
  color:'black',
  marginLeft:'15%',
  marginTop:'100%',
  fontSize:12
},

recoveryemail:{
  
  width:'100%',
  height:45,
  marginLeft:'30%',
  marginTop:'120%',
  position: 'relative'
   
},


//place and design the button 
nextbtn:{
  marginTop:45,
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
inputFieldStyle: {
  position: 'relative',
  borderBottomWidth: 1,
  borderBottomColor: '#BB6BD9', 
  marginRight:'40%'

},
dropDownStyle: {
  borderColor: theme.colors.primary,
    //END OF DROP DOWN MENU DESIGN 
},
})
