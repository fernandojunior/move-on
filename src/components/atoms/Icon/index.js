import React from 'react'
import { Image } from 'react-bootstrap'
import './index.css'

export default ({ icon, width, height }) => {
  const style = {
    width: width || height,
    height: height || width,
    objectFit: 'contain'
  }
  return (
    <Image src={`/public/icons/${icon}.svg`} style={style} />
  )
}
