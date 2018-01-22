import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'

import actions from '../redux/actions/'

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const MainLayout = ({container, ...props}) => {
  return (
    <div>
      { container ? (
        <div className='container lay-mt--ms'>
          {props.children}
        </div>
        ) : props.children
      }
    </div>
  )
}

function mapStateToProps (state) {
  return state
}

function mapDispatchToProps (dispatch) {
  return {
    //userActions: bindActionCreators(actions.user, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
