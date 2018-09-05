import React from 'react'
import NavBar from '../../components/organisms/NavBar'
import MovieListContainer from '../../containers/MovieListContainer'
import SearchContainer from '../../containers/SearchContainer'

export default () => (
  <div className="HomePage">
    <NavBar SearchComponent={SearchContainer} />
    <MovieListContainer />
  </div>
)
