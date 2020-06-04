import '@babel/polyfill'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from '../src/component/App'

render(<App/>, document.querySelector('#root'))




