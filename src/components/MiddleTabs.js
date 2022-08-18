import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

export default function MiddleTabs({ activeTab, setActiveTab, style }) {
  return (
    <View style={[styles.container, style]}>
      <TabButton
        text="Near me"
        active={activeTab === 'Near me'}
        onPress={() => setActiveTab('Near me')}
      />
      <TabButton
        text="Popular"
        active={activeTab === 'Popular'}
        onPress={() => setActiveTab('Popular')}
      />
    </View>
  )
}

const TabButton = ({ text, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tabButton,
        { backgroundColor: active ? theme.colors.primary : '#fff' },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.tabText, { color: active ? '#fff' : '#B8B8B8' }]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.constants.verticalCardMargin,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  tabText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
})
