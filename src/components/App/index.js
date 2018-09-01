import React from 'react'
import { Button } from 'react-bootstrap'
import MovieList from '../organisms/MovieList'
import './index.css'

const App = () => (
  <div className="app">
    <MovieList />
    <img src="/public/react.png" alt="React logo" />
    No content here. We only test the build process <spam role="img">😉</spam>
    <Button bsStyle="primary" bsSize="large">test button</Button>
  </div>
)

export default App
