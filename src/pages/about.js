import React, { Component } from 'react'

class Home extends Component {
  render () {
    return (
      <div>
        <div className='subpage--wrap'>
          <div className='about--her' >
            <img src='https://i.imgur.com/UhugL7q.png' />
            <h3>Líffræðingurinn</h3>
            <p>Bacon ipsum dolor amet alcatra shankle landjaeger ribeye spare ribs. Tongue sirloin venison ham hock kevin, buffalo bresaola pork belly shankle salami capicola ribeye jerky brisket. Bacon strip steak tenderloin, kielbasa pancetta ground round kevin salami pork chop flank. Tongue chuck pork chop meatball shoulder alcatra landjaeger. Sirloin ball tip porchetta, doner drumstick flank short ribs frankfurter swine t-bone shank sausage. Burgdoggen chuck t-bone, prosciutto pancetta spare ribs ground round kevin beef ribs kielbasa.</p>
          </div>
          <div className='about--him'>
            <img src='https://i.imgur.com/pGrhFKO.png' />
            <h3>Forritarinn</h3>
            <p>Andouille pork loin beef ribs chicken alcatra. Tongue kevin jowl, boudin andouille tri-tip turkey swine spare ribs pastrami sausage venison pork prosciutto biltong. Pork chop prosciutto alcatra bacon buffalo flank. Strip steak cupim buffalo, turkey jerky pig frankfurter shank.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
