import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import logoImage from '../img/movie-on-logo.svg'

class Logo extends Component {
    render(){
        return (
            <Image src={logoImage} style={{paddingTop: 32, overflow:'hidden'}}/>
        )
    }
}

export default Logo

