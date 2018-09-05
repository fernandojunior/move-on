import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieDetail from '../components/organisms/MovieDetail'
import { getMovieRequest as getMovieRequestAction } from '../reducer/movies/actions'

class MovieDetailContainer extends Component {
  componentWillMount() {
    const { getMovieRequest, match } = this.props
    getMovieRequest(match.params.id)
  }

  render() {
    const showDetail = 'movie' in this.props && this.props.movie != null && this.props.movie != undefined // eslint-disable-line
    const { movie } = this.props

    return (
      <div>
        { showDetail && <MovieDetail movie={movie} /> }
      </div>
    )
  }
}

const mapStateToProps = ({ movieStore }) => ({
  movie: movieStore.movie
})

const mapDispatchToProps = (dispatch, { done }) => ({
  getMovieRequest: (id) => {
    dispatch(getMovieRequestAction(id)).then(done, done)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailContainer)
