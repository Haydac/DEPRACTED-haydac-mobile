import {
  FETCH_FAVOURITE_ERROR,
  FETCH_FAVOURITE_REQUEST,
  FETCH_FAVOURITE_SUCCESS,
} from './favouriteConstants'

const initialState = {
  favourites: [],
  loading: false,
  error: null,
}

// this handles fetching of a single business or multiple businesses
const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FAVOURITE_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_FAVOURITE_SUCCESS:
      return {
        ...state,
        loading: false,
        favourites: action.payload,
      }

    case FETCH_FAVOURITE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default { businessReducer }
