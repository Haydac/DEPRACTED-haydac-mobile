import AsyncStorageLib from '@react-native-async-storage/async-storage'

/**
 *
 * @param {*} itemName - name of item to get
 * @returns the item
 */
const getItem = async (itemName) => {
  try {
    const info = JSON.parse(await AsyncStorageLib.getItem(itemName))
    return info
  } catch (error) {
    throw error
  }
}

/**
 *
 * @param {*} itemName - item name
 * @param {*} item - item to stire
 */
const setItem = async (itemName, item) => {
  try {
    await AsyncStorageLib.setItem(itemName, JSON.stringify(item))
  } catch (error) {
    throw error
  }
}

export default { getItem, setItem }
