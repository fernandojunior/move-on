import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Grid, Row, Col } from 'react-bootstrap'
import MoviePoster from '../../molecules/MoviePoster'
import './index.css'

const mockedMovie = JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}') // eslint-disable-line

const Ratings = () => (
  <div>
    *****
  </div>
)

const MovieSynopsis = ({ synopsis }) => (
  <div>
    <h3>Sinopse</h3>
    <p>
      { synopsis }
    </p>
  </div>
)

const MovieContent = ({ Title, Year, Runtime, Genre, Plot }) => (
  <div className="MovieContent">
    <h1> { Title } </h1>
    <h2> { Year } | { Runtime } | { Genre } </h2>
    <Ratings />
    <MovieSynopsis synopsis={Plot} />
  </div>
)

const DesktopDetail = ({ movie }) => (
  <Grid fluid={false} className="DesktopDetail">
    <Row>
      <Col className="coluna" sm={12} md={12} lg={12}>
        <MoviePoster {...movie} width={480} height={720} />
        <MovieContent {...movie} />
      </Col>
    </Row>
  </Grid>
)

const MobileDetail = ({ movie }) => {
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width // eslint-disable-line
  const height = (window.innerHeight > 0) ? window.innerHeight : screen.height // eslint-disable-line
  return (
    <div className="MobileDetail">
      <MoviePoster {...movie} width={width} height={height} />
      <MovieContent {...movie} />
    </div>
  )
}

export default () => (
  <div className="MovieDetail">
    <BrowserView>
      <DesktopDetail movie={mockedMovie} />
    </BrowserView>
    <MobileView>
      <MobileDetail movie={mockedMovie} />
    </MobileView>
  </div>
)
