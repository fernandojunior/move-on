import React from 'react'
import { Grid, Row, Col, FormControl } from 'react-bootstrap'
import './index.css'
import Search from './Search'
import CloseIcon from './CloseIcon'

const searchMessage = 'Que filme você procura?'

export default () => (
  <Grid>
    <Row>
      <Col xs={12} smHidden lgHidden mdHidden className="noPadding">
        <div id="col1-mobile">
          <FormControl
            id="search-mobile"
            placeholder={searchMessage}
            onFocus={(e) => { e.target.placeholder = '' }}
            onBlur={(e) => { e.target.placeholder = searchMessage }}
          />
          <Search float="left" marginRight="0" marginLeft="9%" />
          <CloseIcon />
        </div>
      </Col>


    </Row>
  </Grid>
)
