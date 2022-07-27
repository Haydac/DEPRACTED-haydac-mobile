import React from 'react'
import { View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../core/theme'

export default function SearchBar({
  width,
  placeHolder,
  searchBarOuterStyle,
  searchBarColor,
  iconLeft,
  iconLeftColor,
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
            fontSize: 15,
            fontWeight: '700',
            backgroundColor: 'transparent',
          },
          textInputContainer: {
            justifyContent: 'center',
            borderRadius: 40,
            backgroundColor: searchBarColor,
          },
        }}
        enablePoweredByContainer={false}
        renderLeftButton={() =>
          iconLeft || (
            <View style={styles.leftIcon}>
              <Ionicons
                name="search"
                size={24}
                color={iconLeftColor || '#000'}
              />
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
    marginLeft: 9,
    alignSelf: 'center',
  },
})
