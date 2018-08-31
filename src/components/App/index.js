import React from 'react'
import { Button } from 'react-bootstrap'
import './index.css'
import NavTest from '../organisms/NavBar'

const App = () => (
  <div className="app">
    <NavTest />
    No content here. We only test the build process <spam role="img">😉</spam>
    <Button bsStyle="primary" bsSize="large">test button</Button>
  </div>
)

export default App
