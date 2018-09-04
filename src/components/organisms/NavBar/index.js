import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Icon from '../../atoms/Icon'
import Search from '../../molecules/Search'
import UserAvatar from '../../molecules/UserAvatar'
import './index.css'

const Logo = () => (
  <Icon icon="logo" width={128} height={32} />
)

export default () => (
  <div className="NavBar">
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
