import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import searchIcon from '../img/hollow.png'

class Search extends Component {
    render() {
        return (
            <Image src={searchIcon} style={{float:"right", marginRight: 10, marginTop: 32}}/>
        )
    }
}

export default Search