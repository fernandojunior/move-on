import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MovieDetailContainer from './containers/MovieDetailContainer'
//
// const MovieDetailContainer = () => {
//   const mockedMovie = JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}') // eslint-disable-line
//   return (
//     <div>
//       <MovieDetail movie={mockedMovie} />
//     </div>
//   )
// }

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/movie/:id" component={MovieDetailContainer} />
    </Switch>
  </div>
)

export default App
