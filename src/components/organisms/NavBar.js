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
      <Grid fluid>
        <Row>
          <Col xs={6} sm={4} className="noPadding">
            <div id="col1" className="column">
              <Logo />
            </div>
          </Col>
          <Col xsHidden sm={4} className="noPadding">
            <div id="col2" className="column">
              <FormControl id="search-input" placeholder="Que filme você procura?" />
            </div>
          </Col>
          <Col xsHidden sm={4} className="noPadding">
            <div id="col3" className="column">
              <p id="dev-name"> Nome do Desenvolvedor</p>
              <Profile className="profile" />
            </div>
          </Col>
          <Col xs={6} smHidden mdHidden lgHidden className="noPadding">
            <div id="col4" className="column">
                So apareço no cel
            </div>
          </Col>

        </Row>

      </Grid>

    )
  }
}

export default NavBar
