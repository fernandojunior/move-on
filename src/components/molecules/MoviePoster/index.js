import React from 'react'
import { BrowserView } from 'react-device-detect'
import { Image } from 'react-bootstrap'

export default ({ id, title, url, year }) => (
  <div>
    <Image className="image" key={id} src={url} responsive />

    <BrowserView>
      <div className="title">
        <spam>{title}</spam>
        <spam>{year}</spam>
      </div>
    </BrowserView>
  </div>
)
