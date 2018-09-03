import React from 'react'
import { Image } from 'react-bootstrap'
import icon from '../img/close.png'

export default () => (
  <Image
    src={icon}
    style={{
      marginTop: 32, float: 'right', marginRight: '12%', position: 'relative'
    }}
  />
)
