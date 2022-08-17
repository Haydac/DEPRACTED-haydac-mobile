import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

// Use uri, data will be remote <Image source={{ uri: image_url }}/>
export default function BusinessAd({ image_url, style }) {
  return (
    <View style={[styles.container, style]}>
      {image_url && <Image style={styles.image} source={image_url} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
})
