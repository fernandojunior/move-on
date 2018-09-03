import React from 'react'
import { Image } from 'react-bootstrap'
import logoImage from '../img/movie-on-logo.svg'

export default () => (
  <Image src={logoImage} style={{ paddingTop: 32, objectFit: 'contain' }} />
)
