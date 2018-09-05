import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from '../components/molecules/Search'
import { findMovieRequest as findMovieRequestAction } from '../reducer/movies/actions'

class SearchContainer extends Component {
  componentWillMount() {
    const { findMovieRequest } = this.props
    findMovieRequest()
  }

  onChange(e) {
    const { findMovieRequest } = this.props
    findMovieRequest({ keyword: e.target.value })
  }

  onFocus(e) {
    const { findMovieRequest } = this.props
    findMovieRequest({ keyword: e.target.value })
  }

  render() {
    return (
      <Search onChange={e => this.onChange(e)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
