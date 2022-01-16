import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// eslint-disable-next-line import/no-unresolved
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function SearchBar({
  title = 'add text',
  icon = 'location-sharp',
  length = '100%',
}) {
  return (
    <View
      style={{
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,
        // backgroundColor: 'blue',
        flexDirection: 'row',
      }}
    >
      <GooglePlacesAutocomplete
        query={{ key: 'AIzaSyABl1b0Ok2pzddo2jRqlNsZaEJzE_6lW6Y' }}
        // you can use this function to filter what user searches for
        onPress={(data, details = null) => {
          // using it to ghet city/location
          const city = data.description.split(',')[0]
        }}
        placeholder={title}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            // marginRight: 4,
            borderRadius: 20,
            fontWeight: '500',
            marginTop: 7,
            height: 30,
            // alignItems: 'center',
            fontSize: 13,
          },
          textInputContainer: {
            borderColor: '#fff',
            // borderWidth: 1,
            backgroundColor: '#eee',
            // height: 40,
            width: length,
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            // marginRight: 10,
            // marginLeft: 20,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name={icon} size={18} />
          </View>
        )}
      />
    </View>
  )
}
