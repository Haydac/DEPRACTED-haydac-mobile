import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { theme } from '../../core/theme'

export default function Brand({ color, logoStyle }) {
  return (
    <View>
      <Svg
        style={[styles.logo, logoStyle]}
        fill="none"
        version="1.1"
        viewBox="0 0 102 136"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="m0 129.51v-123.74c2.7868-5.7077 10.386-9.459 16.18 0v50.473h55.205c6.4461 0 7.5205 11.612 0 11.612h-26.035-29.17v61.653c-1.9748 5.694-10.331 9.169-16.18 0zm101.12-121.96v119.15c0 10.806-13.654 13.18-16.362 0v-35.289h-57.989c-7.2285 0-8.1464-11.512 0-11.512h57.989v-72.349c2.1952-6.5336 11.368-10.687 16.362 0z"
          clip-rule="evenodd"
          fill={color ? color : theme.colors.primary}
          fill-rule="evenodd"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 150,
  },
})
