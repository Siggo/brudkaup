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
         "entry.877086558": $("#rsvp-form input[type='radio'][name='rsvp']:checked").val(),
         "entry.1498135098": $('#names').val(),
         "entry.2606285": $('#comment').val()
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
          <form id="rsvp-form" target="_self" onSubmit={this.postToGoogle.bind(this)}>
            <fieldset>
              <p>Sérðu þér fært að komast?</p>
              <input id="qs1_op_1" type="radio" value="Já, ég mæti!" name="rsvp" />
              <label for="qs1_op_1">Já, ég mæti!</label>
              <input id="qs1_op_2" type="radio" value="Því miður kemst ég ekki" name="rsvp" />
              <label for="qs1_op_1">Kemst því miður ekki</label>
            </fieldset>

            <fieldset>
              <p>Hver eru nöfn þeirra sem mæta?</p>
              <textarea id="names" name="names"></textarea>
            </fieldset>
            <fieldset>
              <p>Athugasemdir eða spurningar</p>
              <textarea id="comment" name="comment"></textarea>
            </fieldset>
              <button id="send" disabled={this.state.sending} type="submit">
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
