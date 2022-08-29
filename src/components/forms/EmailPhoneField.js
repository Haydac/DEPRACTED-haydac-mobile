import React, { useState } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'
import InputField from '../../components/forms/InputField'

import { theme } from '../../core/theme'
import { emailValidator, phoneValidator } from '../../helpers/validation'

export default function EmailPhoneField({
  width,
  height,
  emailPhoneFieldStyle,
  inputFieldStyle,
  setActiveField,
  setEmail,
  setPhone,
  dropDownStyle: style,
  dropDownContainerStyle: containerStyle,
  dropDownTextStyle: textStyle,
  dropDownLabelStyle: labelStyle,
}) {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('Email')
  const [items, setItems] = useState([
    {
      label: 'Email',
      value: 'Email',
      icon: () => (
        <MaterialIcons name="email" color={theme.colors.primary} size={16} />
      ),
    },
    {
      label: 'Phone',
      value: 'Phone',
      icon: () => <MaterialIcons name="phone" color={'#A5A5A5'} size={16} />,
    },
  ])

  return (
    <View
      style={[
        styles.container,
        emailPhoneFieldStyle,
        { width: width, height: height },
        Platform.OS === 'ios' ? { zIndex: 1 } : {},
      ]}
    >
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder=""
        listMode="SCROLLVIEW"
        showTickIcon={false}
        closeOnBackPressed={true}
        closeAfterSelecting={true}
        zIndex={1000}
        style={style}
        containerStyle={containerStyle}
        dropDownContainerStyle={{
          backgroundColor: 'white',
          zIndex: 1000,
          elevation: 1000,
        }}
        textStyle={textStyle}
        labelStyle={labelStyle}
        arrowIconContainerStyle={{ marginLeft: -4 }}
        onSelectItem={(item) => {
          setActiveField(item.value)

          setItems([
            {
              label: 'Email',
              value: 'Email',
              icon: () => (
                <MaterialIcons
                  name="email"
                  color={
                    item.value == 'Email' ? theme.colors.primary : '#A5A5A5'
                  }
                  size={16}
                />
              ),
            },
            {
              label: 'Phone',
              value: 'Phone',
              icon: () => (
                <MaterialIcons
                  name="phone"
                  color={
                    item.value == 'Phone' ? theme.colors.primary : '#A5A5A5'
                  }
                  size={16}
                />
              ),
            },
          ])
        }}
      />

      {/* Email input */}
      <InputField
        id={value}
        height={height}
        placeHolder={value == 'Email' ? 'Email' : 'Phone'}
        inputFieldStyle={[{ flex: 1 }, inputFieldStyle]}
        text={text}
        setText={(value) => {
          setText(value)
          if (emailValidator(value)) {
            setEmail(value)
          }
          if (phoneValidator(value)) {
            setPhone(value)
          }
        }}
        setActiveField={setActiveField}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
