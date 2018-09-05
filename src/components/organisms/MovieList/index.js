import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import MoviePoster from '../../molecules/MoviePoster'
import './index.css'

export default (props) => {
  const { movies, title } = props

  const shape = isMobile ? { width: '108px', height: '162px' } : { width: '156px', height: '234px' }
  const colProps = isMobile ? { className: 'mobile', xs: 4 } : { className: 'desktop', sm: 2, md: 2, lg: 2 }

  const movieViews = (movies || []).map(movie => (
    <Col {...colProps} key={Math.floor(Math.random() * 255)}>
      <Link to={`/movie/${movie.imdbID}`}>
        <MoviePoster {...({ ...movie, ...shape })} showInfo responsive />
      </Link>
    </Col>
  ))

  return (
    <div className="MovieList">
      <Grid fluid={false}>
        <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Col xs={12}>
            <div className="t3 opacity50">
              {(title || 'Tendency')}
            </div>
          </Col>
          {movieViews}
        </Row>
      </Grid>
    </div>
  )
}
