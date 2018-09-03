import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import searchIcon from '../img/hollow.png'

class Search extends Component {
  render() {
    const { float, marginRight, marginLeft } = this.props
    const style = {
      float, marginLeft, marginRight, marginTop: 32, position: 'relative'
    }
    return (
      <Image
        src={searchIcon}
        style={style}
      />
    )
  }
}

export default Search
