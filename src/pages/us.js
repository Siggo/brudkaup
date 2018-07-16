import React, { Component } from 'react'
import vid from '../images/vid.jpg'
import fyrst from '../images/fyrst.jpg'
import seinna from '../images/seinna.jpg'
import thridja from '../images/thridja.jpg'
import fjorda from '../images/fjorda.jpg'
import teemo from '../images/teemo.jpg'
import loka from '../images/loka.jpg'
import {connect} from 'react-redux'


class Us extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      texts: {
        first: 
        {
          is: "Árið var 2008. Hann var nýbyrjaður í lækninum, hún í lyfjafræðinni. Fyrstu kynni voru á sameiginlegu balli fyrir heilbrigðisdeildirnar. Augu þeirra hittust, fuglasöngur hófst og óstöðvandi aðdráttarafl dró þau saman. Hún jós yfir hann fúkyrðum vegna þess að hann var í lækninum. Ást við fyrstu sýn.",
          en: "The year was 2008. He was studying medicine, she was studying pharmacy. They first met at a contest/ball between the health departments of their university. Their eyes met, birds started singing and an unstoppable force drew them together. She yelled profanities at him because he was going to be a doctor. Love at first sight."
        },
        second: 
        {
          is: "Hann átti góðvini í lyfafræðinni og fann því tíðar afsakanir að kíkja í heimsókn. Vináttan óx og þó hún færi til Danmerkur í líffræði héldu þau áfram að tala saman langt frameftir kvöldi. Það kom að því að hún fattaði að hann væri alveg Soldið Kúl Gaur. Hún tók skyndiákvörðun, flutti aftur til Íslands og hélt áfram líffræðinni þar og þau fóru á sitt fyrsta stefnumót.",
          en: "He had friends studying with her so he frequently found excuses to come visit. Their friendship grew and even though she left to study biology in Denmark they kept talking with one another long past midnight. She finally realized that he was a Pretty Cool Guy. She made a snap decision, moved back to Iceland and they went on their first date."
        },
        third: 
        {
          is: "Fyrir seinna stefnumótið keyrði hann yfir hálft landið í gegnum storm. Það var auðveldi parturinn af þeim degi. Kófsveittur af stressi spjallaði hann við tengdaforeldrana meðan hann beið eftir því að hún kláraði vinnuna í fiskinum. Hún kom heim angandi með hrogn í hárinu. Hann tók utan um hana og fann að hann var kominn heim.",
          en: "For their second date he drove halfway across the country through a storm. That was the easy part of that day. Sweating from the stress he made small-talk with the inlaws while he waited for her to finish her job at the fish factory. When she arrived, reeking and with roe in her hair, he embraced her and realized that he'd come home."
        },
        fourth: 
        {
          is: "Sambandið þeirra hefur verið rammíslenskt og byggðist á 'þetta reddast'. Þegar hún fann ekki íbúð fyrir næstu önn kom upp sú hugmynd að hún myndi flytja inn. Þau voru bæði hikandi og spennt því þau höfðu bara verið saman í hálft ár. En....þetta reddaðist. Hún small vel inn í fjölskyldulífið hjá honum og þau fluttu svo saman í Bólstaðarhlíðina. Þar þroskuðust þau bæði og, eftir miklar umræður, tóku þá stóru ákvörðun að bæta við fjölskyldumeðlim. Kisanum Tímó. Ókei, það var skyndiákvörðun. En það reddaðist.",
          en: "Their relationship has been fundamentally Icelandic and is based on 'þetta reddast', the Icelandic opionon that ehhh it'll turn out okay. When she couldn't find a place to stay in they had the crazy idea of moving in together. They were both nervous and excited since they'd only been dating for six month. But...it turned out okay. She hit it off with his family and they then moved together into Bólstaðarhlíðin. There they both matured and, after much deliberating, took the big plunge of adding to the family. The kitty Tímó. All right, it was a snap decision. But it turned out okay."
        },
        fifth: 
        {
          is: "Þau kláruðu námið, hann fór sveittur á vinnumarkaðinn og hún fór í meistaranám. 2015, nokkrum mánuðum eftir að Kristján Hrafn kom í heiminn fór hann að hugsa sig um hvort þetta samband væri ekki orðið nokkuð alvarlegt. Hann planaði því bústaðarferð með grilli, rauðvíni og kúri. Í lokin á frábæru kvöldi fór hann á skeljarnar og bað hana um að giftast sér. Hann var bara örlítið hissa þegar hún hló og sagði já.",
          en: "They finished their degrees. He dove into the job market and she started to work on her master's degree. 2015, a few months after Kristján Hrafn was born, he started thinking about whether their relationship wasn't getting kinda serious. He therefore planned a trip into the country with red wine, barbeque and cuddling. At the end of a fantastic night he got down on one knee and asked her to marry him. He was only a tiny bit surprised when she laughed and said yes."
        },
        sixth: 
        {
          is: "Síðan þá hefur ýmislegt gerst. Kristján eignaðist lítinn bróður, Óliver Þór, og aumingja Tímó hefur ekki haft frið síðan. Hún kláraði meistaragráðuna og fór einbeitt á vinnumarkaðinn. Þau eru hægt og rólega að gera upp íbúðina sína í Breiðholtinu og eru hæstánægð að nú sé loksins komið að þessu brúðkaupi!",
          en: "Since then numerous things have happened. Kristján got a little brother, Óliver Þór, and poor Tímó hasn't had a moment of peace since. She got her master's degree and joined him in the job market. They're slowly but surely renovating their apartment in Breiðholtið and are exhilarated that the wedding is finally happening!"
        }
      }
    }

  }


  render () {
    const lang = this.props.misc.lang
    const text = this.state.texts
    return (
      <div>
        <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="false" data-wrap="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={fyrst} alt="First slide"/>
              <p>{text.first[lang]}</p>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={seinna} alt="Second slide"/>
              <p>{text.second[lang]}</p>
            </div>
            <div className="carousel-item">
              <div className="carousel-item__long">
                <img className="d-block w-100" src={thridja} alt="Third slide"/>
                <p>{text.third[lang]}</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item__long">
                <img className="d-block w-100" src={teemo} alt="Third slide"/>
                <p>{text.fourth[lang]}</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item__long">
                <img className="d-block" src={fjorda} alt="Third slide"/>
                <p>{text.fifth[lang]}</p>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={loka} alt="Third slide"/>
              <p>{text.sixth[lang]}</p>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Us)