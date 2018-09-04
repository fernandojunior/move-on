import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const mountPoint = document.getElementById('root')
ReactDOM.render(<div><BrowserRouter><App /></BrowserRouter></div>, mountPoint)
