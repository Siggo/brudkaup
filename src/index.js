/* global fetch, prompt */

import React from 'react'
import { render } from 'react-dom'

import { Route, NavLink, HashRouter } from 'react-router-dom'

import configureStore from './redux/store'

import { Provider } from 'react-redux'

import Main from './pages/main'
import About from './pages/about'
import Stuff from './pages/stuff'

import banner from './images/Banner.jpg'

import actions from './redux/actions/'

import './styles/dist/main.css'

const store = configureStore()

render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <div className='header'>
          <ul className='header--nav'>
            <li><NavLink exact to='/'>Main</NavLink></li>
            <li><NavLink to='/stuff'>Stuff</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
          </ul>
        </div>
        <div className='banner'>
          <img src={banner} alt='banner' />
        </div>
        <div className='container'>
          <div className='row'>
            <Route exact path='/' component={Main} />
            <Route path='/stuff' component={Stuff} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
)
