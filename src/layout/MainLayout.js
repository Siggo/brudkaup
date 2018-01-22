import { bindActionCreators } from 'redux'
import React from 'react';
import { connect } from 'react-redux'
import {  Route } from 'react-router-dom'

import actions from '../redux/actions/'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/main.css'


const MainLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <div className="header">Header</div>
        <div className="container">
          <Component {...matchProps} />
        </div>
        <div className="footer">Footer</div>
      </div>
    )} />
  )
};

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    //userActions: bindActionCreators(actions.user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
