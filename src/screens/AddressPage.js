import React from 'react'
import { View, Text, SafeAreaView, Pressable } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default function AddressPage({ navigation }) {
  const backButton = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: '#fff' }}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: '#fff',
          }}
        >
          {/* Close button */}
          <Pressable onPress={backButton}>
            <AntDesign
              name="close"
              size={23}
              style={{
                color: 'black',
                justifyContent: 'center',
                marginRight: 6,
                marginLeft: 12,
                backgroundColor: '#fff',
              }}
            />
          </Pressable>

          {/* text */}
          <Header
            style={{
              // position: 'absolute',
              color: 'black',
              fontSize: 23,
              // backgroundColor: 'red',
              textAlign: 'center',
              marginLeft: '20%',
              backgroundColor: '#fff',
            }}
          >
            Choose location
          </Header>
        </View>

        {/* search bar */}
        <SearchBar />
      </View>
    </SafeAreaView>
  )
}
