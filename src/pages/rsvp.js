import React, { Component } from 'react'
import $ from 'jquery'

class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      registered: false,
      sending: false
    }

  }

   postToGoogle = (e) => {
    e.preventDefault();
    this.setState({sending: true})
     $.ajax({
       url: "https://docs.google.com/forms/d/e/1FAIpQLSdRmYai8ze-PcJyFQ6mYFiM15jIcnABxJX-O-Gs6LT5XzoJAw/formResponse",
       data: {
         "entry.877086558": $(".rsvp-form input[type='radio'][name='rsvp']:checked").val(),
         "entry.1498135098": $('#names').val(),
         "entry.2606285": $('#spotify').val()
       },
       type: "POST",
       dataType: "xml",
     }).then(() => {
      this.setState({
        registered: true,
        sending: false
      })
     }).catch((e) => {
      this.setState({
        registered: true,
        sending: false
      })
     })
   }
  
  render () {
    return (
      <div>
        <h2>RSVP</h2>
        { !this.state.registered && 
          <form className="rsvp-form" target="_self" onSubmit={this.postToGoogle.bind(this)}>
            
              <p>Það mikilvæga! Ef þú ert hérna inni getum við ekki ímyndað okkur gott brúðkaup án þín. Smelltu inn svari að neðan hvort þú komist og nöfnin á þeim sem að mæta.</p>
              <p>Við minnum góðlátlega á að það verður veisla fram á kvöld þannig að yngra fólkið (undir 16) þarf að vera heima.</p>
              <p>Þegar að gítarstrengirnir verða allir slitnaðir mun DJ Spotify taka við. Ef þú situr á heitasta lagi sumarsins þá máttu endilega óska eftir því og við bætum því inn á playlistann!</p>
              <fieldset>
              <input id="qs1_op_1" type="radio" value="Já, ég mæti!" name="rsvp" />
              <label for="qs1_op_1">Já, ég mæti!</label>
              <input id="qs1_op_2" type="radio" value="Því miður kemst ég ekki" name="rsvp" />
              <label for="qs1_op_1">Kemst því miður ekki</label>
            </fieldset>
            <div className='rsvp-form__text'>
              <fieldset>
                <p>Hver eru nöfn þeirra sem mæta?</p>
                <textarea id="names" name="names"></textarea>
              </fieldset>
              <fieldset>
                <p>Óskalag</p>
                <textarea id="spotify" name="spotify"></textarea>
              </fieldset>
            </div>
              <button id="send" className="btn btn-default" disabled={this.state.sending} type="submit">
                Senda
              </button>
          </form>
        }
        { this.state.registered && 
          <p>Þú ert skráður! Ef þú óskar svo eftir að breyta skráningunni geturðu haft samband við brúðhjónin.</p>
        }
        
      </div>
    )
  }
}

export default RSVP
