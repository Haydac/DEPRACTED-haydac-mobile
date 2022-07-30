import React from 'react'
import { View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../core/theme'

export default function SearchBar({
  width,
  height,
  placeHolder,
  searchBarOuterStyle,
  searchBarColor,
  iconLeft,
  iconLeftColor,
  renderIconLeft,
  iconRight,
  iconRightColor,
  renderIconRight,
}) {
  return (
    <View
      style={[
        styles.container,
        searchBarOuterStyle,
        { width: width || '100%' },
      ]}
    >
      <GooglePlacesAutocomplete
        placeholder={placeHolder || 'Search'}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        onPress={(data) => setCity(data.structured_formatting.main_text)}
        minLength={2}
        fetchDetails={true}
        returnKeyType={'search'}
        onFail={(error) => console.error(error)}
        query={{
          key: 'AIzaSyABl1b0Ok2pzddo2jRqlNsZaEJzE_6lW6Y',
          language: 'en',
        }}
        styles={{
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          textInput: {
            marginTop: 4,
            paddingHorizontal: 25,
            fontSize: 14,
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: '700',
            backgroundColor: 'transparent',
          },
          textInputContainer: {
            height: height || 53,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            backgroundColor: searchBarColor,
          },
        }}
        enablePoweredByContainer={false}
        renderLeftButton={() =>
          renderIconLeft && (
            <View style={styles.leftIcon}>
              {iconLeft || (
                <Ionicons
                  name="search"
                  size={24}
                  color={iconLeftColor || '#000'}
                />
              )}
            </View>
          )
        }
        renderRightButton={() =>
          renderIconRight && (
            <View style={styles.rightIcon}>
              {iconRight || (
                <Ionicons
                  name="search"
                  size={24}
                  color={iconRightColor || '#000'}
                />
              )}
            </View>
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftIcon: {
    paddingLeft: 15,
    alignSelf: 'center',
  },
  rightIcon: {
    paddingRight: 15,
    alignSelf: 'center',
  },
})
