import React from 'react'
import { StyleSheet } from 'react-native'

import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'

import { FontAwesome } from '@expo/vector-icons'

export default function BrowseScreen() {
  return (
    <Screen style={styles.container}>
      <SearchBar
        width="95%"
        height={45}
        placeHolder="Search for local businesses"
        searchBarOuterStyle={styles.searchBarOuterStyle}
        searchBarColor="#eee"
        iconRightColor="#4F4F4F"
        iconRight={<FontAwesome name="search" size={20} color="#4F4F4F" />}
        renderIconLeft={false}
        renderIconRight={true}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBarOuterStyle: {
    paddingBottom: 10,
    alignSelf: 'center',
  },
})
