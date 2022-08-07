import React, { useState, useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import DropDownPicker from 'react-native-dropdown-picker'
import InputField from '../../components/forms/InputField'

import { theme } from '../../core/theme'

export default function EmailPhoneField({
  width,
  height,
  emailPhoneFieldStyle,
  dropDownStyle,
  dropDownContainerStyle,
  dropDownTextStyle,
  dropDownLabelStyle,
  inputFieldStyle,
  setActiveField,
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
        showTickIcon={false}
        listMode={'SCROLLVIEW'}
        closeOnBackPressed={true}
        closeAfterSelecting={true}
        style={dropDownStyle}
        containerStyle={dropDownContainerStyle}
        textStyle={dropDownTextStyle}
        labelStyle={dropDownLabelStyle}
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
        setText={setText}
        setActiveField={setActiveField}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    zIndex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
