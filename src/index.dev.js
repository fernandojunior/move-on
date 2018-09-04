import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const mountPoint = document.getElementById('root')

ReactDOM.render(
  <AppContainer><App /></AppContainer>,
  mountPoint
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default

    ReactDOM.render(
      <AppContainer><NewApp /></AppContainer>,
      mountPoint
    )
  })
}
