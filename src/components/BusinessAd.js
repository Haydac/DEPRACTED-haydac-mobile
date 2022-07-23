import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { theme } from '../core/theme'

// Use uri, data will be remote <Image source={{ uri: image_url }}/>
export default function BusinessAd({ image_url }) {
  return (
    <View>
      <View style={styles.container}>
        {image_url && <Image style={styles.image} source={image_url} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: theme.constants.verticalCardMargin,
  },
  image: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
})
