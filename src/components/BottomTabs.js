import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
      <Icon icon="home" text="Home" color="#D9BAF1" />
      <Icon icon="tag" text="Deals" />
      <Icon icon="bookmark" text="Bookmark" />
      <Icon icon="cog" text="Settings" />
    </View>
  )
}

const Icon = ({ icon, text, color }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome
          name={icon}
          size={25}
          style={[styles.font, (color = { color })]}
        />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  font: {
    marginBottom: 3,
    alignSelf: 'center',
  },
})
