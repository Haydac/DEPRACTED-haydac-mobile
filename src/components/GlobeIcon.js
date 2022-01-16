import React from 'react'
import { View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function GlobeIcon() {
  return (
    <Pressable
      onPress={() => {
        console.log('globe icon pressed')
        // navigation.navigate('LocationScreen')
      }}
    >
      {/* globe to choose location, wrap in a pressable */}
      <TouchableOpacity>
        <View>
          <Icon name="globe" size={32} color="#F2F2F2" />
        </View>
      </TouchableOpacity>
    </Pressable>
  )
}
