import React from 'react'
import { Grid, Row, Col, FormControl } from 'react-bootstrap'
import './index.css'
import Search from '../../atoms/Search'
import CloseIcon from '../../atoms/CloseIcon'

export default () => (
  <Grid>
    <Row>
      <Col xs={12} smHidden lgHidden mdHidden className="noPadding">
        <div id="col1-mobile" className="column">
          <FormControl
            id="search-mobile"
            placeholder="Que filme você procura?"
            onFocus={(e) => { e.target.placeholder = '' }}
            onBlur={(e) => { e.target.placeholder = 'Que filme você procura?' }}
          />
          <Search float="left" marginRight="0" marginLeft="9%" />
          <CloseIcon />
        </div>
      </Col>


    </Row>
  </Grid>
)
