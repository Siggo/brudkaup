import React, { Component } from 'react'
import { connect } from 'react-redux';

import english from '../images/english.png'
import icelandic from '../images/icelandic.png'

import actions from '../redux/actions'

class Language extends Component {
  constructor(props) {
    super(props);
    this.changelang = this.changelang.bind(this)
  }
  
  changelang = ( { dispatch }) => {
    let newLang = this.props.misc.lang === 'is' ? 'en' : 'is'
    this.props.changeLang(newLang)
  }
  render () {
    const lang = this.props.misc.lang
    return (
      <img src={lang == 'is' ? icelandic : english} id='language' onClick={this.changelang}/>
    )
  }

  

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    changeLang: (lang) => {
      dispatch(actions.misc.toggleLanguage(lang))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Language)
