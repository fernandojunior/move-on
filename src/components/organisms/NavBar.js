import React, { Component } from 'react'
import {
  Grid, Row, Col, FormControl
} from 'react-bootstrap'
import './nav.css'
import Profile from '../atoms/Profile'
import Logo from '../atoms/Logo'

class NavBar extends Component {
  render() {
    return (
      <Grid fluid >
        <Row>
            <Col xs={6} sm={4} className="noPadding">
              <div id="col1">
                <Logo/>
              </div>
            </Col>
            <Col xsHidden sm={4} className="noPadding">
              <div id="col2">
                <FormControl id="search-input" placeholder="Que filme você procura?"/>
              </div>
            </Col>
            <Col xsHidden sm={4} className="noPadding">
              <div id="col3">
                <p id="dev-name"> Nome do Desenvolvedor</p>
                <Profile className="profile"/>
              </div></Col>
            <Col xs={6} smHidden mdHidden lgHidden className="noPadding">
              <div id="col4">
                So apareço no cel
              </div>
            </Col>

          </Row>

      </Grid>

    )
  }
}

export default NavBar