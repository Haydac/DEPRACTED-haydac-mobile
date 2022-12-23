import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { mapMarker } from './core/Brand'

export default function BusinessMap({ style, coordinates, title }) {
  const [mapInitialized, setMapInitialized] = useState(false)

  const onMapReady = async () => {
    if (mapInitialized) {
      return
    }

    setMapInitialized(true)
  }

  return (
    <View>
      <MapView
        onLayout={onMapReady}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        style={[styles.mapViewStyle, style]}
      >
        {coordinates && (
          <Marker
            coordinate={{
              ...coordinates,
            }}
            identifier="business"
            anchor={{ x: 0.5, y: 0.5 }}
            title={title}
          >
            {mapMarker}
          </Marker>
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  mapViewStyle: {
    width: Dimensions.get('window').width,
    height: 200,
    flex: 1,
    zIndex: 10,
  },
})
