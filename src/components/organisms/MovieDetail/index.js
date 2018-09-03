import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Grid, Row, Col } from 'react-bootstrap'
import MoviePoster from '../../molecules/MoviePoster'
import Icon from '../../atoms/Icon'
import './index.css'

const mockedMovie = JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}') // eslint-disable-line

const Ratings = () => (
  <div className="MovieRatings">
    <div style={{ float: 'left' }}>
      <Icon icon="star-filled" height="24px" />
      <Icon icon="star-filled" height="24px" />
      <Icon icon="star-filled" height="24px" />
      <Icon icon="star-filled" height="24px" />
      <Icon icon="star-hollow" height="24px" />
    </div>
    <div className="t5-secondary opacity75" style={{ marginLeft: '16px', float: 'left' }}>
      8.8/10
    </div>
  </div>
)

const MovieSynopsis = ({ synopsis }) => (
  <div className="MovieSynopsis">
    <div className="t3 opacity50 title">Sinopse</div>
    <div className="t6 opacity75" style={{ marginTop: '16px' }}>
      { synopsis }
    </div>
  </div>
)

const MovieContent = ({ Title, Year, Runtime, Genre, Plot }) => (
  <div className="MovieContent">
    <div className="t1"> { Title } </div>
    <div className="t6 opacity75" style={{ marginTop: '8px', lineHeight: 1.14 }}>
      { Year } | { Runtime } | { Genre }
    </div>
    <Ratings />
    <MovieSynopsis synopsis={Plot} />
  </div>
)

const DesktopDetail = ({ movie }) => (
  <Grid fluid={false} className="DesktopDetail">
    <Row>
      <Col sm={12} md={12} lg={12}>
        <MoviePoster {...movie} width={480} height={720} />
        <div className="Rectangle" />
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
