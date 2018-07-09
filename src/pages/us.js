import React, { Component } from 'react'
import vid from '../images/vid.jpg'
import fyrst from '../images/fyrst.jpg'
import seinna from '../images/seinna.jpg'
import thridja from '../images/thridja.jpg'
import fjorda from '../images/fjorda.jpg'
import teemo from '../images/teemo.jpg'
import loka from '../images/loka.jpg'


class Us extends Component {
  render () {
    return (
      <div>
        <div id="carousel" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={fyrst} alt="First slide"/>
              <p>Árið var 2008. Hann var nýbyrjaður í lækninum, hún í lyfjafræðinni. Fyrstu kynni voru á sameiginlegu balli fyrir heilbrigðisdeildirnar. Augu þeirra hittust, fuglasöngur hófst og óstöðvandi aðdráttarafl dró þau saman. Hún jós yfir hann fúkyrðum vegna þess að hann var í lækninum. Ást við fyrstu sýn.</p>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={seinna} alt="Second slide"/>
              <p>Hann átti góðvini í lyfafræðinni og fann því tíðar afsakanir að kíkja í heimsókn. Vináttan óx og þó hún færi til Danmerkur í líffræði héldu þau áfram að tala saman langt frameftir kvöldi. Það kom að því að hún fattaði að hann væri alveg Soldið Kúl Gaur. Hún tók skyndiákvörðun, flutti aftur til Íslands og hélt áfram líffræðinni þar og þau fóru á sitt fyrsta stefnumót.</p>
            </div>
            <div className="carousel-item">
              <div className="carousel-item__long">
                <img className="d-block w-100" src={thridja} alt="Third slide"/>
                <p>Fyrir seinna stefnumótið keyrði hann yfir hálft landið í gegnum storm. Það var auðveldi parturinn af þeim degi. Kófsveittur af stressi spjallaði hann við tengdaforeldrana meðan hann beið eftir því að hún kláraði vinnuna í fiskinum. Hún kom heim angandi með hrogn í hárinu. Hann tók utan um hana og fann að hann var kominn heim.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item__long">
                <img className="d-block w-100" src={teemo} alt="Third slide"/>
                <p>Sambandið þeirra hefur verið rammíslenskt og byggðist á 'þetta reddast'. Þegar hún fann ekki íbúð fyrir næstu önn kom upp sú hugmynd að hún myndi flytja inn. Þau voru bæði hikandi og spennt því þau höfðu bara verið saman í hálft ár. En....þetta reddaðist. Hún small vel inn í fjölskyldulífið hjá honum og þau fluttu svo saman í Bólstaðarhlíðina. Þar þroskuðust þau bæði og, eftir miklar umræður, tóku þá stóru ákvörðun að bæta við fjölskyldumeðlim. Kisanum Tímó. Ókei, það var skyndiákvörðun. En það reddaðist.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-item__long">
                <img className="d-block" src={fjorda} alt="Third slide"/>
                <p>Þau kláruðu námið, hann fór sveittur á vinnumarkaðinn og hún fór í meistaranám. 2015, nokkrum mánuðum eftir að Kristján Hrafn kom í heiminn fór hann að hugsa sig um hvort þetta samband væri ekki orðið nokkuð alvarlegt. Hann planaði því bústaðarferð með grilli, rauðvíni og kúri. Í lokin á frábæru kvöldi fór hann á skeljarnar og bað hana um að giftast sér. Hann var bara örlítið hissa þegar hún hló og sagði já.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={loka} alt="Third slide"/>
              <p>Síðan þá hefur ýmislegt gerst. Kristján eignaðist lítinn bróður, Óliver Þór, og aumingja Tímó hefur ekki haft frið síðan. Hún kláraði meistaragráðuna og fór einbeitt á vinnumarkaðinn. Þau eru hægt og rólega að gera upp íbúðina sína í Breiðholtinu og eru hæstánægð að nú sé loksins komið að þessu brúðkaupi!</p>
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

export default Us
