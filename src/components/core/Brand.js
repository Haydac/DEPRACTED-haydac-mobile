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

export const backgroundSvg = (
  <Svg
    style={{ position: 'absolute' }}
    width="200%"
    height="30%"
    viewBox="0 0 614 397"
    preserveAspectRatio="none"
  >
    <Path
      d="M96 349C71.1772 369.278 9.5 408.48 -9 391.98V-105H413.5V375C406.5 288.5 305 461 214.5 358C220 371 178.5 281.606 96 349Z"
      fill="#BB6BD9"
      stroke="#BB6BD9"
    />
  </Svg>
)

export const getStartedSvg = (
  <Svg
    style={{ position: 'absolute' }}
    width="100%"
    height="87%"
    viewBox="0 0 498 826"
    fill="none"
    preserveAspectRatio="none"
  >
    <Path
      d="M0.36255 3.02978C0.0726503 1.51435 1.47712 0.321625 3.02003 0.321625H495.577C496.681 0.321625 497.577 1.21706 497.577 2.32162V815.552C497.577 817.325 495.673 818.461 494.401 817.226C456.422 780.367 91.5598 430.744 145.358 655.879C202.099 893.325 404.828 441.875 175.957 764.107C-48.4888 1080.11 12.7506 67.7874 0.36255 3.02978Z"
      fill="#E8D2FA"
    />
  </Svg>
)
