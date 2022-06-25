import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Home, SettingsSceen } from '../screens'

const screens = {
  Home: {
    screen: Home,
  },
  SettingsSceen: {
    screen: SettingsSceen,
  },
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)
