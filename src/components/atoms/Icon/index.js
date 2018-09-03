import React from 'react'
import './index.css'

export default ({ icon, color, width, height }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`) // eslint-disable-line
  const size = width || height

  const style = {
    display: 'inline-block',
    color,
    width: size,
    height: size
  }

  return (
    <span className="Icon" style={style} dangerouslySetInnerHTML={{ __html: svg }} />
  )
}
