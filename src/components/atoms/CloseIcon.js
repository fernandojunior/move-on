import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import icon from '../img/close.png'

class CloseIcon extends Component {
  render() {
    return (
      <Image
        src={icon}
        style={{
          marginTop: 32, float: 'right', marginRight: '12%', position: 'relative'
        }}
      />
    )
  }
}

export default CloseIcon
