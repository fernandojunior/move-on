import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Profile from '../../atoms/Profile'
import Logo from '../../atoms/Logo'
import Search from '../../molecules/Search'
import './index.css'

export default () => (
  <div>
    <Grid fluid={false}>
      <Row style={{ display: 'flex', flexWrap: 'wrap' }} className="column">
        <Col xs={6} sm={4}>
          <Logo />
        </Col>
        <Col xsHidden sm={4}>
          <Search />
        </Col>
        <Col xsHidden sm={4}>
          <p id="dev-name">Nome do Desenvolvedor</p>
          <Profile />
        </Col>
        <Col xs={6} smHidden mdHidden lgHidden>
          <Profile />
        </Col>
      </Row>
    </Grid>
  </div>
)
