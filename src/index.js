/* global fetch, prompt */

import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
/* import { Route, NavLink, HashRouter } from 'react-router-dom' */
import configureStore from './redux/store'

import { Provider } from 'react-redux'

import Main from './pages/main'
import About from './pages/about'
import Stuff from './pages/stuff'
import Venue from './pages/venue'
import RSVP from './pages/rsvp'

import Container from './layouts/container'

import actions from './redux/actions/'

import './styles/dist/main.css'

import { flipp } from './misc/devSecrets'

const store = configureStore()

const state = store.getState()

const scrollTo = (id) => {
  $('html, body').animate({
    scrollTop: $(id).offset().top - $('.header').height()
  }, 500)
}

window.addEventListener('scroll', function () {
  $('.header').toggleClass('scrolled', window.scrollY > $('.header').height())
})

flipp(() => {
  store.dispatch(actions.misc.flipView())
})

/*
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
) */

render(
  <Provider store={store}>
    <div>
      <div className='header'>
        <ul className='header--nav'>
          <li><a href='#main' onClick={() => scrollTo('#main')}>Main</a></li>
          <li><a href='#stuff' onClick={() => scrollTo('#stuff')}>Stuff</a></li>
          <li><a href='#about' onClick={() => scrollTo('#about')}>About</a></li>
          <li><a href='#rsvp' onClick={() => scrollTo('#rsvp')}>RSVP</a></li>
          <li><a href='#venue' onClick={() => scrollTo('#venue')}>Venue</a></li>
        </ul>
      </div>
      <div className='banner'>
        <div className='banner--image' />
      </div>
      <div className='container'>
        <div className='row'>
          <Container id='main' component={Main} />
          <Container id='stuff' component={Stuff} />
          <Container id='about' component={About} />
          <Container id='rsvp' component={RSVP} />
          <Container id='venue' component={Venue} />
        </div>
      </div>
    </div>
  </Provider>,
  document.getElementById('root')

)
