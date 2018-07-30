import React, { Component } from 'react'
import {connect} from 'react-redux'

class Venue extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      texts: {
        title: 
        {
          is: "STAÐSETNING",
          en: "LOCATION"
        },
        church: 
        {
          is: "Athöfnin verður haldin í Fríkirkju Reykjavíkur þann 15. sept kl 16:00.",
          en: "The ceremony will be held at Fríkirkja Reykjavíkur, september 15th at 4 PM."
        },
        party: 
        {
          is: "Veislan verður svo 17:30 í sal Ferðafélags Íslands, Mörkinni 6.",
          en: "The dinner will be held at Ferðafélag Íslands at 5:30, address Mörkin 6."
        }
      }
    }

  }
  render () {
    const lang = this.props.misc.lang
    const text = this.state.texts
    return (
      <div>
        <h2>{text.title[lang]}</h2>
        
        <div className='venue'>
        	<div className='venue--church'>
        		<p>{text.church[lang]}</p>
        	 <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjjwcFv515aL10blU4Y4XG9_x-4y2ZhYk&q=Fríkirkjan+í+Reykjavík,Reykjavík+Iceland" width="500" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
        <div className='venue--dining'>
        <p>{text.party[lang]}</p>
        	 <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjjwcFv515aL10blU4Y4XG9_x-4y2ZhYk&q=Mörkin,+Reykjavík" width="500" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
        </div>
         </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(Venue)
