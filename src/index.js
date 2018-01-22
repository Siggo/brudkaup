/* global fetch, prompt */

import React from 'react'
import { render } from 'react-dom'

import {  BrowserRouter } from 'react-router-dom'


import configureStore from './redux/store'

import { Provider } from 'react-redux'

import MainLayout from './layout/MainLayout'

import Main from './pages/main'

import actions from './redux/actions/'

const store = configureStore()

function routeUpdate () {
  window.scrollTo(0, 0)
}

render(
  <Provider store={store}>
      <BrowserRouter onUpdate={routeUpdate.bind(this)}>
     	<MainLayout path="/" component={Main} />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
