import React from 'react'
import { Image } from 'react-bootstrap'

export default ({ float, marginRight, marginLeft }) => {
  const style = {
    float, marginLeft, marginRight, marginTop: 32, position: 'relative'
  }
  return (
    <Image src="/public/icons/search.svg" style={style} />
  )
}
