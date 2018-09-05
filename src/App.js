import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieDetailContainer from './containers/MovieDetailContainer'
import MobileSearchContainer from './containers/MobileSearchContainer'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:id" component={MovieDetailContainer} />
      <Route path="/search/" component={MobileSearchContainer} />
    </Switch>
  </div>
)

export default App
