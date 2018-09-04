import MovieService from './service'

export const actionTypes = {
  FIND_MOVIE_SUCCESS: 'FIND_MOVIE_SUCCESS',
  FIND_MOVIE_REQUEST: 'FIND_MOVIE_REQUEST',
  FIND_MOVIE_ERROR: 'FIND_MOVIE_ERROR'
}

export const findMovieRequest = query => (async (dispatch) => {
  const movies = await MovieService.find(query)
  return dispatch({ type: actionTypes.FIND_MOVIE_SUCCESS, movies, query: query || {} })
})
