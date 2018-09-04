import React from 'react'
import { Image } from 'react-bootstrap'
import profilePicture from '../img/profile.png'

export default () => (
  <div>
    <Image src={profilePicture} circle responsive style={{ width: 32, height: 32 }} />
  </div>
)
