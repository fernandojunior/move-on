import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserView, MobileView } from 'react-device-detect'
import { Button, Grid, Row, Col } from 'react-bootstrap'
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

const MovieContent = ({ movie }) => {
  const { Title, Year, Runtime, Genre, Plot } = movie
  return (
    (
      <div className="MovieContent">
        <div className="t1"> { Title } </div>
        <div className="t6 opacity75" style={{ marginTop: '8px', lineHeight: 1.14 }}>
          { Year } | { Runtime } | { Genre }
        </div>
        <Ratings />
        <MovieSynopsis synopsis={Plot} />
      </div>
    )
  )
}

const DesktopDetail = ({ movie }) => (
  <Grid fluid={false} className="DesktopDetail">
    <Row>
      <Col sm={12} md={12} lg={12}>
        <MoviePoster {...movie} width={480} height={720} />
        <div className="Rectangle" />
        <MovieContent movie={movie} />
        <div className="Close">
          <Link to="/">
            <Icon icon="close" />
            <div className="Back"> Voltar </div>
          </Link>
        </div>
      </Col>
    </Row>
  </Grid>
)

const MobileDetail = ({ movie }) => {
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width // eslint-disable-line
  const height = (window.innerHeight > 0) ? window.innerHeight : screen.height // eslint-disable-line

  const rec1Style = {
    position: 'absolute',
    bottom: 0,
    width,
    height: height * (120 / 712),
    background: '#000000'
  }

  const rec2Style = {
    position: 'absolute',
    bottom: rec1Style.height,
    width,
    height: height * (432 / 712),
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)'
  }

  const rec3Style = {
    position: 'absolute',
    top: 0,
    width,
    height: height - (rec1Style.height + rec2Style.height),
    backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), #000000)'
  }

  const backStyle = {
    position: 'absolute',
    bottom: height * 0.07,
    width: 312,
    height: 40,
    borderRadius: '3px',
    borderStyle: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    left: (width / 2) - (312 / 2),
    margin: '0 auto'
  }

  backStyle.left = (width / 2) - (backStyle.width / 2)

  return (
    <div className="MobileDetail" style={{ width, height }}>
      <MoviePoster {...movie} width={width} height={height} />
      <div style={rec1Style} />
      <div style={rec2Style} />
      <div style={rec3Style} />
      <MovieContent movie={movie} />
      <Link to="/">
        <Button style={backStyle} className="Back">
          Voltar
        </Button>
      </Link>
      <div className="Close">
        <Link to="/">
          <Icon icon="close" />
        </Link>
      </div>
    </div>
  )
}

export default props => (
  <div className="MovieDetail">
    <BrowserView>
      <DesktopDetail {...props} />
    </BrowserView>
    <MobileView>
      <MobileDetail {...props} />
    </MobileView>
  </div>
)
