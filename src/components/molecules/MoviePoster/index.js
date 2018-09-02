import React from 'react'
import { BrowserView } from 'react-device-detect'
import { Image } from 'react-bootstrap'

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

export default ({ id, title, url, year, showInfo = false, width = 480, height = 720 }) => {
  const moviePosterStyle = {
    width,
    height
  }

  imageStyle.width = width

  return (
    <div className="MoviePoster" style={moviePosterStyle}>
      <Image style={imageStyle} className="image" key={id} src={url} responsive />

      { showInfo
        && (
        <BrowserView>
          <div className="title">
            <spam>{title}</spam>
            <spam>{year}</spam>
          </div>
        </BrowserView>
        )
      }
    </div>
  )
}
