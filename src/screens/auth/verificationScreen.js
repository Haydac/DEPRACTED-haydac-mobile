import React, { useState } from 'react'
import { Text, StyleSheet,View,Platform} from 'react-native'
import Verifyicon from '../../components/core/verifyicon'
import Designicon from '../../components/core/Designicon'
import { MaterialIcons } from '@expo/vector-icons'


import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Button from '../../components/buttons/Button'
import { theme } from '../../core/theme' //provides theme/design for the componenet
export default function VerificationScreen({ navigation }) {
    const [text, setText] = useState('')
  const [activeField, setActiveField] = useState('')

  //button states
  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('white')
  const formWidth = '75%'
  const formItemHeight = 45

 
  const KeyIcon = (
    <MaterialIcons
      name="key"
      color={activeField == 'Password' ? '#BB6BD9' : '#A5A5A5'}
      size={20}
    />
  )


  return (
    
    <Screen style={styles.container}>






 <View style={styles.resetsvg}>
    <Verifyicon/>
    </View>

          

       

 <View  style={styles.iconsvg}>
    <Designicon/> 
    </View>


 
  
     <Text style={styles.instructions}>Please enter your verification code.</Text> 
     <Text style={styles.pageinstructions}>A verification code has been sent to your email adress{'\n'}
please enter it below</Text>


<View style={styles.recoveryemail}>

<InputField
              width={formWidth}
              height={formItemHeight}
              placeHolder="Verivication code"
              placeholderTextColor="#C2C2C2"
              leftIcon={KeyIcon}
              inputFieldStyle={styles.inputFieldStyle1}
              text={text}
              setText={setText}
              activeField={activeField}
              setActiveField={setActiveField}
            />

</View>



<View>
<Button
text="next"
textColor={loginBtnTextColor}
backgroundColor={loginBtnColor}
style={styles.nextbtn}
textStyle={styles.NextbtnText}
onPress={() => navigation.navigate('NewPasswordScreen')}
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
   marginTop:'15%',
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
  marginTop:'73%'
},
//place other set of instuctions on screen 
pageinstructions:{
  textAlign:'center',
  justifyContent:'center',
  position:'absolute',
  color:'black',
  marginLeft:'15%',
  marginTop:'85%',
  fontSize:12
},

recoveryemail:{
  
  width:'100%',
  height:45,
  marginLeft:'30%',
  marginTop:'105%',
  position: 'relative'
   
},


//place and design the button 
nextbtn:{
  marginTop:80,
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
inputFieldStyle1: {
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9', 
    marginLeft:'-20%',
    bottom:'8%',
    
   
  },
})
