import React, { Component } from 'react'
import { BrowserView } from 'react-device-detect'
import { Image } from 'react-bootstrap'
import './index.css'

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

class MobilePoster extends Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  toggleHover(hover) {
    this.setState({ hover })
  }

  render() {
    const { imdbID, Title, Poster, Year, showInfo, width, height } = this.props
    const { hover } = this.state

    imageStyle.width = width
    imageStyle.height = height

    if (showInfo && hover) {
      imageStyle.opacity = 0.5
      imageStyle.borderadius = '3px'
      imageStyle.backgroundColor = '#000000'
    } else {
      imageStyle.opacity = null
      imageStyle.borderadius = null
      imageStyle.backgroundColor = null
    }

    return (
      <div className="MoviePoster" onMouseOver={() => this.toggleHover(true)}
        onMouseLeave={() => this.toggleHover(false)}
      >
        <Image style={imageStyle} key={imdbID} src={Poster} responsive />

        { showInfo && hover && (
          <div className="PosterInfo">
            <BrowserView>
              <div className="t5">{Title}</div>
              <div className="t7">{Year}</div>
            </BrowserView>
          </div>
        )
        }
      </div>
    )
  }
}

export default MobilePoster
