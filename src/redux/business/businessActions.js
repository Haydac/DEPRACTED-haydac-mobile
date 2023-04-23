import axios from 'axios'
import {
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_REQUEST,
  FETCH_BUSINESS_ERROR,
  FETCH_GROCERY_STORES_REQUEST,
  FETCH_GROCERY_STORES_SUCCESS,
  FETCH_GROCERY_STORES_ERROR,
} from './businessConstants'
import { API_URL } from '@env'
import { FETCH_RESTAURANTS_REQUEST } from './businessConstants'
import { FETCH_SERIVCES_REQUEST } from './businessConstants'
import { FETCH_RESTAURANTS_SUCCESS } from './businessConstants'
import { FETCH_SERIVCES_SUCCESS } from './businessConstants'
import { FETCH_RESTAURANTS_ERROR } from './businessConstants'
import { FETCH_SERIVCES_ERROR } from './businessConstants'

// based of the businesses gotten, check favourites database.
// retrieve the businesses under the userID in favourites Schema
// and set the retrieved businesses as favourites
// this can be done at the initial file the businesses are fetched

/**
 *
 * @returns an array of all registered businesses
 */
export const fetchBusinesses = () => async (dispatch) => {
  console.log('function to fetch all businesses called')
  dispatch({ type: FETCH_BUSINESSES_REQUEST })

  try {
    // get the response object from the API
    const response = await axios.get(`${API_URL}/business`)

    // convert retrieved object of businesses to an array of objects
    const businesses = Object.entries(response.data).map(([id, data]) => ({
      id,
      ...data,
    }))

    // TODO: this is where the favourites are checked
    const updatedBusinesses = businesses.map((business) => ({
      ...business,
      isFavourite: false,
    }))

    dispatch({ type: FETCH_BUSINESSES_SUCCESS, payload: updatedBusinesses })
  } catch (error) {
    dispatch({
      type: FETCH_BUSINESSES_ERROR,
      payload: `From fetchBusinesses in businessActions.js: ${error.message}}`,
    })
  }
}

/**
 * Fetch business by category method
 * @param {*} categoryName - name of category
 * @returns a list of businesses belonging to the category(categoryID)
 */
export const fetchBusinessesbyCategory = (categoryName) => async (dispatch) => {
  if (categoryName === 'grocery') {
    dispatch({ type: FETCH_GROCERY_STORES_REQUEST })
  } else if (categoryName === 'restaurant') {
    dispatch({ type: FETCH_RESTAURANTS_REQUEST })
  } else {
    // console.log('reached')
    dispatch({ type: FETCH_SERIVCES_REQUEST })
  }

  try {
    const response = await axios.get(
      `${API_URL}/business?category=${categoryName}`
    )
    const serverResponse = response.data
    const data = serverResponse.data
    // console.log('data from api')
    // console.log(JSON.stringify(data, '', 2))

    if (categoryName === 'grocery') {
      dispatch({ type: FETCH_GROCERY_STORES_SUCCESS, payload: data })
    } else if (categoryName === 'restaurant') {
      dispatch({ type: FETCH_RESTAURANTS_SUCCESS, payload: data })
    } else {
      dispatch({ type: FETCH_SERIVCES_SUCCESS, payload: data })
    }
  } catch (error) {
    if (categoryName === 'grocery') {
      dispatch({
        type: FETCH_GROCERY_STORES_ERROR,
        payload: `From fetchBusinessesbyCategory in businessActions.js: ${error.message}`,
      })
    } else if (categoryName === 'restaurant') {
      dispatch({
        type: FETCH_RESTAURANTS_ERROR,
        payload: `From fetchBusinessesbyCategory in businessActions.js: ${error.message}`,
      })
    } else {
      dispatch({
        type: FETCH_SERIVCES_ERROR,
        payload: `From fetchBusinessesbyCategory in businessActions.js: ${error.message}`,
      })
    }
  }
}
