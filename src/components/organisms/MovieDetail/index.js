import React, { Component } from 'react'
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

class MobileDetail extends Component {
  componentWillMount() {
    this.updateDimensions()
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width // eslint-disable-line
    const height = (window.innerHeight > 0) ? window.innerHeight : screen.height // eslint-disable-line
    this.setState({ width, height })
  }

  render() {
    const { width, height } = this.state
    const { movie } = this.props

    const rec1Style = {
      position: 'fixed',
      bottom: 0,
      width,
      height: (height * (120 / 712)),
      background: '#000000'
    }

    const rec2Style = {
      position: 'fixed',
      bottom: rec1Style.height - 5,
      width,
      height: height * (432 / 712),
      backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000)'
    }

    const rec3Style = {
      position: 'fixed',
      top: 0,
      width,
      height: height - (rec1Style.height + rec2Style.height),
      backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0), #000000)'
    }

    const backButtonStyle = {
      position: 'fixed',
      width: width * (312 / 360),
      height: 40,
      borderRadius: '3px',
      borderStyle: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      margin: '0 auto'
    }
    backButtonStyle.bottom = rec1Style.height - (rec1Style.height / 2) - (backButtonStyle.height / 2)  // eslint-disable-line
    backButtonStyle.left = (width / 2) - (backButtonStyle.width / 2)

    const contentStyle = {
      position: 'fixed',
      bottom: backButtonStyle.bottom + (backButtonStyle.height + backButtonStyle.height * 0.5),
      width: backButtonStyle.width,
      left: backButtonStyle.left,
      margin: backButtonStyle.margin
    }

    return (
      <div className="MobileDetail" style={{ width, height }}>
        <MoviePoster {...movie} width={width} height={height} />

        <div className="rect3" style={rec3Style} />
        <div className="rect2" style={rec2Style} />
        <div className="rect1" style={rec1Style} />
        <div style={contentStyle}>
          <MovieContent movie={movie} />
        </div>
        <Link to="/">
          <Button style={backButtonStyle} className="Back">
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
