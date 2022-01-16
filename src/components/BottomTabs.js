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
      {/* reduce icon sizes */}
      <View style={{ top: -5 }}>
        <Icon icon="home" text="Home" color="#D9BAF1" size={25} />
      </View>
      <Icon icon="tag" text="Deals" />
      <Icon icon="bookmark" text="Bookmark" />
      <Icon icon="cog" text="Settings" />
    </View>
  )
}

const Icon = ({ icon, text, color, size = 19 }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome
          name={icon}
          size={size}
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
