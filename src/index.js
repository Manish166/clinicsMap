import React from 'react'
import '@babel/polyfill'
import {render} from 'react-dom'
import { Provider } from "react-redux";
import store from './store'
import App from "./component/App"
import '../public/index.css'

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.querySelector('#root'))




