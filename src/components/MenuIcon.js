import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function MenuIcon() {
  return (
    <Pressable>
      <TouchableOpacity>
        <View style={{}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name="bars"
              size={16}
              color="#000"
              style={{
                position: 'absolute',
                alignItems: 'center',
                marginLeft: 50,
                zIndex: 20,
                width: '50%',
              }}
            />
            <Icon name="circle" size={35} color="#F2F2F2" />
          </View>
        </View>
      </TouchableOpacity>
    </Pressable>
  )
}
