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
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <GooglePlacesAutocomplete
        placeholder={title}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            marginRight: 4,
            borderRadius: 20,
            fontWeight: '500',
            marginTop: 7,
            height: 30,
            fontSize: 13,
          },
          textInputContainer: {
            borderColor: '#fff',
            borderWidth: 1,
            backgroundColor: '#eee',
            height: 40,
            width: length,
            borderRadius: 15,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
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
