import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import Icon from '../../atoms/Icon'
import Search from '../../molecules/Search'
import UserAvatar from '../../molecules/UserAvatar'
import './index.css'

const Logo = () => (
  <Icon icon="logo" width={128} height={32} />
)

export default (props) => {
  const SearchComponent = 'SearchComponent' in props ? props.SearchComponent : Search // eslint-disable-line

  return (
    <div className="NavBar">
      <Grid fluid={false}>
        <Row style={{ display: 'flex', flexWrap: 'wrap' }} className="column">
          <Col xs={6} sm={4}>
            <Logo />
          </Col>
          <Col xsHidden sm={4}>
            <SearchComponent />
          </Col>
          <Col xsHidden sm={4}>
            <div style={{ float: 'right' }}>
              <UserAvatar showName />
            </div>
          </Col>
          <Col xs={6} smHidden mdHidden lgHidden>
            <div style={{ display: 'inline-block', float: 'right' }}>
              <div className="SearchIcon" style={{ float: 'left', paddingRight: '12px', paddingTop: '6px' }}>
                <Link to="/search/">
                  <Icon icon="search" height={24} />
                </Link>
              </div>
              <UserAvatar />
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
