import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as qs from 'query-string'
import MovieList from '../components/organisms/MovieList'
import MovieDetailContainer from './MovieDetailContainer'
import { findMovieRequest as findMovieRequestAction } from '../reducer/movies/actions'

class MovieListContainer extends Component {
  componentWillMount() {
    const { findMovieRequest } = this.props

    const urlQuery = qs.parse(location.search) // eslint-disable-line

    if ('keyword' in urlQuery) {
      findMovieRequest(urlQuery)
    } else {
      findMovieRequest()
    }
  }

  render() {
    const { movies, query } = this.props
    const title = (query && query.keyword) || null

    return (
      <MovieList movies={movies} title={title} MovieDetailComponent={MovieDetailContainer} />
    )
  }
}

const mapStateToProps = ({ movieStore }) => ({
  movies: movieStore.movies,
  query: movieStore.query
})

const mapDispatchToProps = (dispatch, { done }) => ({
  findMovieRequest: (query) => {
    dispatch(findMovieRequestAction(query)).then(done, done)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)
