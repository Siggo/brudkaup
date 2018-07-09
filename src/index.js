/* global fetch, prompt */

import React from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
/* import { Route, NavLink, HashRouter } from 'react-router-dom' */
import configureStore from './redux/store'

import { Provider } from 'react-redux'

import Us from './pages/us'
import About from './pages/about'
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

window.addEventListener('scroll', function (e) {
  if (window.scrollY > $('.banner').outerHeight())
  {
    let old = window.scrollY
    console.log("hm")
    $('.header').addClass('scrolled').css({marginTop: 0});
      
    $('.container-wrapper').css({marginTop: ($('.header').outerHeight() + $('.banner').outerHeight())});
    // Leiðinda kækur í scrollY að breytast hérna í akkúrat einni keyrslu af þessu sem triggerar óvart hitt einu sinni. Gerum þetta handvirkt í staðinn
    window.scrollY = old + e.detail
  } 
    

  else {
      $('.header').removeClass('scrolled').css({marginTop: $('.banner').outerHeight()});;
      $('.container-wrapper').css({marginTop: 0});
    }
})

window.addEventListener('resize', function () {
  $('.header').css({marginTop: $('.banner').outerHeight()});
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
      
      <div className='banner'>
        <div className='banner--image' />
      </div>
      <div className='header'>
        <ul className='header--nav'>
          <li><a href='#us' onClick={() => scrollTo('#us')}>AÐAL</a></li>
          <li><a href='#rsvp' onClick={() => scrollTo('#rsvp')}>RSVP</a></li>
          <li><a href='#venue' onClick={() => scrollTo('#venue')}>STAÐSETNING</a></li>
        </ul>
      </div>
        <div className='container-wrapper'>
          <Container id='us'  component={Us} />
          <Container id='rsvp'  component={RSVP} />
          <Container id='venue' component={Venue} />
        </div>
    </div>
  </Provider>,
  document.getElementById('root')

)

$('.header').css({marginTop: $('.banner').outerHeight()});
