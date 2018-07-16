import React, { Component } from 'react'
import { connect } from 'react-redux';
import $ from 'jquery'

class RSVP extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      registered: false,
      sending: false,
      texts: {
        main1: 
        {
          is: "Það mikilvæga! Ef þú ert hérna inni getum við ekki ímyndað okkur gott brúðkaup án þín. Smelltu inn svari að neðan hvort þú komist og nöfnin á þeim sem að mæta.",
          en: "The important stuff! If you're reading this then we can't imagine a good wedding without you. Please rsvp below with your names and whether you'll be able to attend."
        },
        main2: 
        {
          is: "Við minnum góðlátlega á að það verður veisla fram á kvöld þannig að yngra fólkið (undir 16) þarf að vera heima.",
          en: "As the party will continue well into the night we kindly remind you that the younger folk (under 16) should stay home."
        },
        main3: 
        {
          is: "Þegar að gítarstrengirnir verða allir slitnaðir mun DJ Spotify taka við. Ef þú situr á heitasta lagi sumarsins þá máttu endilega óska eftir því og við bætum því inn á listann!",
          en: "When the guitar strings have all broken DJ Spotify will take the stage. If you're sitting on the hottest hit of the summer then we'll add it to the list!"
        },
        going: 
        {
          is: "Já, ég mæti!",
          en: "I'll be there!"
        },
        cannot: 
        {
          is: "Kemst því miður ekki",
          en: "I can't make it"
        },
        names: 
        {
          is: "Nöfn þeirra sem mæta?",
          en: "Attendees"
        },
        song: 
        {
          is: "Óskalag",
          en: "Song request"
        },
        send: 
        {
          is: "Senda",
          en: "Submit"
        },
        sent: 
        {
          is: "Þú ert skráður! Ef þú óskar eftir því að breyta skráningunni geturðu haft samband við brúðhjónin.",
          en: "You're registered! If you need to change your registration please contact the bride or groom."
        }
      }
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
    const lang = this.props.misc.lang
    const text = this.state.texts
    return (
      <div>
        <h2>RSVP</h2>
        { !this.state.registered && 
          <form className="rsvp-form" target="_self" onSubmit={this.postToGoogle.bind(this)}>
              <p>{text.main1[lang]}</p>
              <p>{text.main2[lang]}</p>
              <p>{text.main3[lang]}</p>
              <fieldset>
              <div className='radio-group'>
                <input id="qs1_op_1" type="radio" value="Já, ég mæti!" name="rsvp" checked="checked" />
                <label for="qs1_op_1">{text.going[lang]}</label>
              </div>
              <div className='radio-group'>
                <input id="qs1_op_2" type="radio" value="Því miður kemst ég ekki" name="rsvp" />
                <label for="qs1_op_1">{text.cannot[lang]}</label>
              </div>
            </fieldset>
            <div className='rsvp-form__text'>
              <fieldset>
                <p>{text.names[lang]}</p>
                <textarea id="names" name="names"></textarea>
              </fieldset>
              <fieldset>
                <p>{text.song[lang]}</p>
                <textarea id="spotify" name="spotify"></textarea>
              </fieldset>
            </div>
              <button id="send" className="btn btn-default" disabled={this.state.sending} type="submit">
                {text.send[lang]}
              </button>
          </form>
        }
        { this.state.registered && 
          <p>{text.sent[lang]}</p>
        }
        
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

export default connect(mapStateToProps, mapDispatchToProps)(RSVP)
