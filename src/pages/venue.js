import React, { Component } from 'react'

class Venue extends Component {
  render () {
    return (
      <div>
        <h2>STAÐSETNING</h2>
        
        <div className='venue'>
        	<div className='venue--church'>
        		<p>Athöfnin verður haldin í Fríkirkju Reykjavíkur þann 15. sept kl 16:00.</p>
        	 <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjjwcFv515aL10blU4Y4XG9_x-4y2ZhYk&q=Fríkirkjan+í+Reykjavík,Reykjavík+Iceland" width="500" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
        </div>
        <div className='venue--dining'>
        <p>Veislan verður svo 17:30 í sal Ferðafélags Íslands, Mörkinni 6.</p>
        	 <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAjjwcFv515aL10blU4Y4XG9_x-4y2ZhYk&q=Mörkin,+Reykjavík" width="500" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
        </div>
        </div>
        
         </div>
    )
  }
}

export default Venue
