import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path, G, Ellipse } from 'react-native-svg'

export default function DesignIcon({ style }) {
  return (
    <View style={[style]}>
      <Svg
        width="149"
        height="149"
        viewBox="0 0 149 149"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M216 99.5C216 154.452 167.647 199 108 199C48.3533 199 0 154.452 0 99.5C0 44.5477 48.3533 0 108 0C167.647 0 216 44.5477 216 99.5Z"
          fill="#E8D2FA"
        />
        <G filter="url(#filter0_d_1087_132)">
          <Ellipse
            cx="132.5"
            cy="122"
            rx="83.5"
            ry="77"
            fill="#BB6BD9"
            fill-opacity="0.56"
            shape-rendering="crispEdges"
          />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
