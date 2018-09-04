import React from 'react'
import { Button } from 'react-bootstrap'
import MovieList from '../organisms/MovieList'
import MovieDetail from '../organisms/MovieDetail'
import NavBar from '../organisms/NavBar'
import './index.css'

const test = () => ( // eslint-disable-line
  <div>
    <MovieDetail />
    <img src="/public/react.png" alt="React logo" />
    No content here. We only test the build process <spam role="img">😉</spam>
    <Button bsStyle="primary" bsSize="large">test button</Button>
  </div>
)

const App = () => (
  <div className="App">
    <NavBar />
    <MovieList />
  </div>
)

export default App
