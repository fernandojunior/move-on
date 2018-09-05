import MovieService from './service'

export const actionTypes = {
  FIND_MOVIE_REQUEST: 'FIND_MOVIE_REQUEST',
  FIND_MOVIE_SUCCESS: 'FIND_MOVIE_SUCCESS',
  GET_MOVIE_REQUEST: 'GET_MOVIE_REQUEST',
  GET_MOVIE_SUCCESS: 'GET_MOVIE_SUCCESS'
}

export const findMovieRequest = query => (async (dispatch) => {
  const movies = await MovieService.find(query)
  return dispatch({ type: actionTypes.FIND_MOVIE_SUCCESS, movies, query: query || {} })
})


export const getMovieRequest = id => (async (dispatch) => {
  const movie = await MovieService.findById(id)
  return dispatch({ type: actionTypes.GET_MOVIE_SUCCESS, movie })
})
