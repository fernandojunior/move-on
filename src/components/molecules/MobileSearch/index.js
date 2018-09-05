import React from 'react'
import { Link } from 'react-router-dom'
import { Image, Grid, Row, Col, FormControl } from 'react-bootstrap'
import './index.css'

const searchMessage = 'Que filme você procura?'

const movieTypes = [
  'Ação',
  'Aventura',
  'Séries',
  'Animes'
]

const CloseIcon = () => (
  <Image
    src="/public/icons/close.svg"
    style={{
      marginTop: 12, float: 'right', marginRight: '12%', position: 'relative'
    }}
  />
)

const SearchIcon = ({ float, marginRight, marginLeft }) => {
  const style = {
    float, marginLeft, marginRight, marginTop: 12, position: 'relative'
  }
  return (
    <Image src="/public/icons/search.svg" style={style} />
  )
}

export default ({ onKeyPress }) => (
  <Grid>
    <Row>
      <Col xs={12} smHidden lgHidden mdHidden>
        <div style={{ marginLeft: '32px', marginRight: '32px' }}>
          <FormControl
            id="search-mobile"
            placeholder={searchMessage}
            onFocus={(e) => { e.target.placeholder = '' }}
            onBlur={(e) => { e.target.placeholder = searchMessage }}
            onKeyPress={e => onKeyPress(e)}
          />
          <SearchIcon float="left" marginRight="0" marginLeft="9%" />
          <Link to="/">
            <CloseIcon />
          </Link>
        </div>
      </Col>
      <Col xs={12} smHidden lgHidden mdHidden>
        { movieTypes.map(type => (
          <div className="t6" style={{ marginTop: '24px', marginLeft: '64px', marginRight: '64px' }}>{type}</div>
        )) }
      </Col>


    </Row>
  </Grid>
)
