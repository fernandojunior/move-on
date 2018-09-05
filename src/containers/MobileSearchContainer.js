import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import MobileSearch from '../components/molecules/MobileSearch'
import { findMovieRequest as findMovieRequestAction } from '../reducer/movies/actions'

class SearchContainer extends Component {
  componentWillMount() {
    const { findMovieRequest } = this.props
    findMovieRequest()
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.history.push(`/?keyword=${e.target.value}`) // eslint-disable-line
    }
  }

  render() {
    return (
      <MobileSearch onKeyPress={e => this.onKeyPress(e)} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer))
