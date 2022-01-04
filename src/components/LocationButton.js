import React from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function LocationButton({ navigation }) {
  return (
    <Pressable
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'AddressPage' }],
        })
      }}
    >
      <TouchableOpacity>
        <View
          style={
            {
              // alignItems: 'center',
              // backgroundColor: 'violet',
            }
          }
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EAEAEA',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
              height: 'auto',
            }}
          >
            {/* text should be dynamic */}
            <Text
              size={15}
              style={{
                fontSize: 12,
                marginLeft: 12,
              }}
            >
              105 THE POND ROAD
            </Text>
            <AntDesign
              name="down"
              size={15}
              style={{
                justifyContent: 'center',
                marginRight: 6,
                marginLeft: 8,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Pressable>
  )
}
