import { actionTypes } from './actions'

function reducer(state = { movies: null, query: null }, action) {
  switch (action.type) {
    case actionTypes.FIND_MOVIE_SUCCESS:
      return {
        movies: action.movies,
        query: action.query
      }
    case actionTypes.GET_MOVIE_SUCCESS:
      return {
        movie: action.movie
      }
    default:
      return state
  }
}

export default reducer
