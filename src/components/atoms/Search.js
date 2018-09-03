import React from 'react'
import { Image } from 'react-bootstrap'
import searchIcon from '../img/hollow.png'

export default ({ float, marginRight, marginLeft }) => {
  const style = {
    float, marginLeft, marginRight, marginTop: 32, position: 'relative'
  }
  return (
    <Image src={searchIcon} style={style} />
  )
}
