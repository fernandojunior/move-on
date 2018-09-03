import React from 'react'
import { BrowserView } from 'react-device-detect'
import { Image } from 'react-bootstrap'

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}

export default ({ imdbID, Title, Poster, Year, showInfo, width, height }) => {
  imageStyle.width = width
  imageStyle.height = height

  return (
    <div>
      <Image style={imageStyle} className="image" key={imdbID} src={Poster} responsive />

      { showInfo
        && (
          <BrowserView>
            <div className="title">
              <spam>{Title}</spam>
              <spam>{Year}</spam>
            </div>
          </BrowserView>
        )
      }
    </div>
  )
}
