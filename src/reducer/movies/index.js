import { actionTypes } from './actions'

function reducer(state = { movies: null, query: null }, action) {
  switch (action.type) {
    case actionTypes.FIND_MOVIE_SUCCESS:
      return { ...action }
    default:
      return state
  }
}

export default reducer
