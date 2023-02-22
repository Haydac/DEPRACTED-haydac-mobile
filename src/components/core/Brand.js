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

export const backgroundSvg = (width, height) => (
  <Svg
    style={{ position: 'absolute' }}
    width={width}
    height={height}
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

export const outerBackground = (width, height) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 494 824"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M5.85207 -33.5796C5.93981 -34.7024 6.88866 -34.8998 8.00836 -34.7784L502.216 18.7913C503.231 18.9014 504 19.7585 504 20.7797V780.23C504 782.004 502.097 783.139 500.824 781.904C462.845 745.045 97.9829 395.422 151.781 620.557C208.522 858.004 408.652 412.285 165.38 709.785C-72.6642 1000.89 2.51111 9.17866 5.85207 -33.5796Z"
      fill="#E8D2FA"
    />
  </Svg>
)

export const innerBackroung = (width, height) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 414 641"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M43.2067 2.00473C43.4125 1.09709 44.2052 0.518066 45.1359 0.518066H484.871C485.975 0.518066 486.871 1.4135 486.871 2.51807V594.146C486.871 594.837 486.613 595.418 486.022 595.776C473.3 603.479 321.277 692.965 281.271 595.257C239.509 493.257 151.7 723.149 43.5462 595.257C-61.0504 471.571 36.6652 30.8636 43.2067 2.00473Z"
      fill="#E8D2FA"
      fill-opacity="0.58"
    />
  </Svg>
)

export const getStartedSvg = (width, height) => (
  <Svg
    style={{ position: 'absolute' }}
    width={width}
    height={height}
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

export const mapMarker = (
  <Svg
    width="24"
    height="30"
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M12 0C5.75446 0 0.691406 5.06302 0.691406 11.3086C0.691406 13.3973 1.10023 15.5545 2.27343 17.1094L12 30L21.7266 17.1094C22.7922 15.6971 23.3086 13.2005 23.3086 11.3086C23.3086 5.06302 18.2456 0 12 0ZM12 6.54968C14.6279 6.54968 16.7589 8.6807 16.7589 11.3086C16.7589 13.9365 14.6279 16.0675 12 16.0675C9.37211 16.0675 7.24111 13.9365 7.24111 11.3086C7.24111 8.6807 9.37211 6.54968 12 6.54968Z"
      fill="#B659FF"
    />
  </Svg>
)
