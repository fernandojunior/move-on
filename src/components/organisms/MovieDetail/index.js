import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import { Grid, Row, Col } from 'react-bootstrap'
import MoviePoster from '../../molecules/MoviePoster'
import Icon from '../../atoms/Icon'
import './index.css'

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

  const rec1 = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * (120 / 712),
    background: '#000000'
  }

  const rec2 = {
    position: 'absolute',
    bottom: rec1.height,
    width: '100%',
    height: height * (432 / 712),
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)'
  }

  const rec3 = {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height - (rec1.height + rec2.height),
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), #000000)'
  }

  return (
    <div className="MobileDetail" style={{ width, height }}>
      <MoviePoster {...movie} width={width} height={height} />
      <div style={rec1} />
      <div style={rec2} />
      <div style={rec3} />
      <MovieContent {...movie} />
    </div>
  )
}

export default ({ movie }) => (
  <div className="MovieDetail">
    <BrowserView>
      <DesktopDetail movie={movie} />
    </BrowserView>
    <MobileView>
      <MobileDetail movie={movie} />
    </MobileView>
  </div>
)
