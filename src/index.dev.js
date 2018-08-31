import 'react-hot-loader/patch'
// import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const mountPoint = document.getElementById('root')

ReactDOM.render(
  <AppContainer><App /></AppContainer>,
  mountPoint
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default

    ReactDOM.render(
      <AppContainer><NewApp /></AppContainer>,
      mountPoint
    )
  })
}
