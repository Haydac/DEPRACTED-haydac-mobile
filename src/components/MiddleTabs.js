import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Businesses from './BusinessItem'

export default function MiddleTabs() {
  // what is returned is dependent on what button is active
  const DisplayBusinesses = ({ isActive = 'Near me' }) => {
    if (isActive === 'Near me') return <Businesses />
    return (
      <Text style={{ alignSelf: 'center', marginTop: '10%' }}>
        Popular businesses should be displayed
      </Text>
    )
  }
  const [activeTab, setActiveTab] = useState('Near me')
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '2%',
          marginBottom: '4%',
        }}
      >
        <MiddleButton
          text="Near me"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <MiddleButton
          text="Popular"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
      <DisplayBusinesses isActive={activeTab} />
    </View>
  )
}

const MiddleButton = (props) => {
  const { text, activeTab } = props
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === text ? '#BB6BD9' : 'white',
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(text)}
    >
      <Text
        style={{
          color: activeTab === text ? 'white' : '#D0D0D0',
          fontSize: 13,
          fontWeight: '900',
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
