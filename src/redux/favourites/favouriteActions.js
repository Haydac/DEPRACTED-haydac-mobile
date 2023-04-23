import axios from 'axios'
import {
  FETCH_FAVOURITE_SUCCESS,
  FETCH_FAVOURITE_ERROR,
  FETCH_FAVOURITE_REQUEST,
} from '../business/businessConstants'

import { API_URL } from '@env'

/**
 * Fetch business by category method
 * @param {*} categoryName - name of category
 * @returns a list of businesses belonging to the category(categoryID)
 */
export const fetchFavourites = (userID) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_FAVOURITE_REQUEST })

    // set headers
    const response = await axios.get(`${API_URL}/favourites/businesses`)
    const serverResponse = response.data
    const data = serverResponse.data

    dispatch({ type: FETCH_FAVOURITE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: FETCH_FAVOURITE_ERROR,
      payload: `From fetchFavourites method in favouriteActions.js: ${error.message}`,
    })
  }
}
