import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Logo from '../../atoms/Logo'
import Search from '../../molecules/Search'
import UserAvatar from '../../molecules/UserAvatar'
import './index.css'

export default () => (
  <div className="Header">
    <Grid fluid={false}>
      <Row style={{ display: 'flex', flexWrap: 'wrap' }} className="column">
        <Col xs={6} sm={4}>
          <Logo />
        </Col>
        <Col xsHidden sm={4}>
          <Search />
        </Col>
        <Col xsHidden sm={4}>
          <div style={{ float: 'right' }}>
            <UserAvatar showName />
          </div>
        </Col>
        <Col xs={6} smHidden mdHidden lgHidden>
          <div style={{ float: 'right' }}>
            <UserAvatar />
          </div>
        </Col>
      </Row>
    </Grid>
  </div>
)
