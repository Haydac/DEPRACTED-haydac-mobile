import React from 'react'
import { View, Text } from 'react-native'

export default function DemarcationLine({ text }) {
  return (
    <View
      style={{
        height: 6,
        backgroundColor: '#eee',
        marginTop: '5%',
        marginBottom: '5%',
        width: '100%',
      }}
    >
      {text}
    </View>
  )
}
