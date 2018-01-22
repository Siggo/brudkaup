/* global fetch, prompt */

import React from 'react'
import { render } from 'react-dom'

import {  Route, BrowserRouter } from 'react-router-dom'


import configureStore from './redux/store'

import { Provider } from 'react-redux'

import MainLayout from './layout/MainLayout'

import Main from './pages/main'

import actions from './redux/actions/'

const store = configureStore()

function routeUpdate () {
  window.scrollTo(0, 0)
}

const MainLayoutContainer = (props) => <MainLayout container>{props.children}</MainLayout>

render(
  <Provider store={store}>
      <BrowserRouter onUpdate={routeUpdate.bind(this)} component={MainLayoutContainer}>
          <Route path='/' component={Main}  />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
