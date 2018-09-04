import React from 'react'
import { FormControl } from 'react-bootstrap'
import './index.css'

const searchMessage = 'Que filme você procura?'

export default () => (
  <FormControl id="search-input" placeholder={searchMessage}
    onFocus={(e) => { e.target.placeholder = '' }}
    onBlur={(e) => { e.target.placeholder = searchMessage }}
  />
)
