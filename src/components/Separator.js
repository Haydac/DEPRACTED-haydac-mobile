import React from 'react'
import { View, Text } from 'react-native'

export default function Separator({
  width,
  text,
  lineColor,
  textColor,
  style,
}) {
  return (
    <View
      style={[
        {
          width: width,
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
    >
      <View style={{ flex: 1, height: 1, backgroundColor: lineColor }} />
      <View>
        <Text style={{ color: textColor, width: 50, textAlign: 'center' }}>
          {text}
        </Text>
      </View>
      <View style={{ flex: 1, height: 1, backgroundColor: lineColor }} />
    </View>
  )
}
