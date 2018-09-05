import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import { isMobile } from 'react-device-detect'
import Icon from '../../atoms/Icon'
import MoviePoster from '../../molecules/MoviePoster'
import './index.css'

const LoadingSpinner = () => (
  <div style={{ width: '50%', margin: 'auto', marginTop: '25%', textAlign: 'center' }}>
    <Icon icon="load" heigth={96} />
  </div>
)

export default (props) => {
  const { movies, title } = props

  const shape = isMobile ? { width: '108px', height: '162px' } : { width: '156px', height: '234px' }
  const colProps = isMobile ? { className: 'mobile', xs: 4 } : { className: 'desktop', sm: 2, md: 2, lg: 2 }

  const movieViews = (movies || []).map(movie => (
    <Col {...colProps} key={movie.imdbID}>
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
          { movieViews.length > 0 && movieViews }
          { movieViews.length === 0 && <LoadingSpinner /> }
        </Row>
      </Grid>
    </div>
  )
}
