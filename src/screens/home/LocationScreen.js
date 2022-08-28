import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'

import { theme } from '../../core/theme'

export default function LocationScreen({ navigation }) {
  const currentLocationDemo = {
    address: '95 the pond road\nToronto, Ontario m3J 0L1',
  }
  const recentLocationsDemo = [
    {
      address: '95 the pond road\nToronto, Ontario m3J 0L1',
      isCurrent: true,
    },
    {
      address: '94 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '93 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '92 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '91 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '90 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '89 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '88 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
    {
      address: '87 the pond road\nToronto, Ontario m3J 0L1',
      current: false,
    },
  ]

  const currentLocationIcon = (
    <Entypo name="location" color={theme.colors.primary} size={24} />
  )

  const leftIcon = (
    <Ionicons
      name="ios-location-sharp"
      color={theme.colors.primary}
      size={20}
    />
  )

  const locationPressed = () => {}

  return (
    <Screen style={styles.container}>
      <SearchBar
        width="100%"
        height={45}
        placeHolder="Search addresses"
        searchBarOuterStyle={styles.searchBarOuterStyle}
        searchBarColor="#eee"
        iconRightColor="#4F4F4F"
        iconRight={<FontAwesome name="search" size={20} color="#4F4F4F" />}
        renderIconLeft={false}
        renderIconRight={true}
      />
      <Header style={[styles.headerStyle, styles.bold]}>
        Current Locations
      </Header>
      <Button
        text={currentLocationDemo.address}
        width="100%"
        height={74}
        style={styles.locationBtn}
        textStyle={styles.locationBtnText}
        textColor="#000"
        leftIcon={currentLocationIcon}
        onPress={() => locationPressed()}
      />
      <Header style={styles.headerStyle}>Recent Locations</Header>
      <ScrollView>
        {recentLocationsDemo?.map((location, locationIdx) => (
          <Button
            key={locationIdx}
            text={location.address}
            width="100%"
            height={74}
            style={[
              styles.locationBtn,
              { backgroundColor: location.isCurrent ? '#f6e9fb' : null },
            ]}
            textStyle={styles.locationBtnText}
            textColor="#000"
            leftIcon={leftIcon}
            onPress={() => locationPressed()}
          />
        ))}
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  searchBarOuterStyle: {
    marginHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerStyle: {
    width: '100%',
    padding: 10,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
    color: '#000',
  },
  locationBtn: {
    paddingHorizontal: 10,
    justifyContent: 'flex-start',
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
  locationBtnText: {
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
})
