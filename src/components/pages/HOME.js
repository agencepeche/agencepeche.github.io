import React, { Component } from 'react'
import Container from '../assets/Container'
import Cards from '../assets/Cards'
import TeamCard from '../assets/TeamCard'
import ValuesCard from '../assets/ValuesCard'
import Ellipse1 from '../dom/svg/Ellipse1'
import Ellipse2 from '../dom/svg/Ellipse2'
import Ellipse3 from '../dom/svg/Ellipse3'
import Ellipse4 from '../dom/svg/Ellipse4'
import Ellipse5 from '../dom/svg/Ellipse5'
import Logo from '../dom/svg/Logo'
import {TweenLite, TimelineMax, Sine} from 'gsap'
import '../lib/MorphSVGPlugin'

const svg_ellipse_3_animation = 'M54.1555118,109.783465 C40.7086614,109.545276 32.1338583,100.104331 22.7362205,91.9192913 C10.9350394,81.6338583 -0.0649606299,70.8070866 0.216535433,53.9389764 C0.519685039,36.6161417 12.2125984,24.4035433 24.9232283,14.5728346 C34.4507874,7.18897638 43.0472441,-0.19488189 56.0393701,0.0216535433 C70.7637795,0.281496063 76.0255906,20.0295276 85.7047244,29.6653543 C95.9468504,39.8425197 110.238189,40.2972441 109.956693,55.8661417 C109.653543,72.9074803 97.9173228,80.3562992 85.5314961,90.2086614 C75.9389764,97.8523622 67.4074803,110 54.1555118,109.783465 Z'
const svg_ellipse_3_animation_2 = 'M6.16286383,99.2547185 C-6.33311846,89.7436015 6.67200243,74.4584635 12.8653707,59.3896055 C19.5710784,43.0741931 1.16618977,30.6724461 1.39685009,14.1779683 C1.64525351,-2.76116172 34.6670921,-3.56017958 43.7923897,7.40806089 C72.4805526,41.8900781 89.9693297,-3.41253026 99.0825272,1.73828125 C135.930311,22.5647791 72.5925811,50.8702532 99.0825272,64.5945276 C125.572473,78.318802 90.6261752,89.6074749 90.3955149,104.831518 C90.1471115,121.495387 51.54082,87.7267863 46.7812006,104.831518 C43.8980695,115.192679 18.6588461,108.765835 6.16286383,99.2547185 Z'
const svg_ellipse_3_origin = 'M55 0c30.376 0 55 24.624 55 55 0 30.375-24.624 55-55 55S0 85.375 0 55C0 24.624 24.624 0 55 0z'
const svg_ellipse_3_transition = 'M110,55 C110,68.4733728 100.692308,77.2169625 92.642998,86.7850099 C82.5542406,98.7830375 71.9013807,110 55,110 C37.642998,110 25.1893491,98.4792899 15.122288,85.9171598 C7.57199211,76.5009862 0,68.0177515 0,55 C0,40.2248521 19.7001972,34.6489152 29.1814596,24.7554241 C39.183432,14.3195266 39.4003945,0 55,0 C72.0966469,0 79.7337278,11.6508876 89.8224852,23.8658777 C97.6765286,33.3688363 110,41.7001972 110,55 Z'

class HOME extends Component {

  componentDidMount() {

    document.addEventListener('scroll', this.detectScroll)

    const ellipse_3 = document.querySelector('.ellipse-3 path')

    let i = 0
    setInterval( () => {
      ellipse_3.style.transform = `rotate(${i}deg)`
      i+=5
    }, 2000)

    const tl = new TimelineMax({repeat: -1, repeatDelay: 0})
    tl.add(TweenLite.to(ellipse_3, 2, {morphSVG:svg_ellipse_3_animation}))
    tl.add(TweenLite.to(ellipse_3, 2, {morphSVG:svg_ellipse_3_transition}))

    setTimeout( () => {
      document.querySelector('.ellipse-2').style.right = 0
    }, 1000)

  }

  detectScroll = (e) => {

    const ellipse_1 = document.querySelector('.ellipse-1')
    const logo_svg = document.querySelector('.navbar-logo svg')
    const logo_title = document.querySelector('.navbar-logo span')
    const navbar = document.querySelector('.navbar-content')

    if (1-window.scrollY/90 <= 0) {
      ellipse_1.style.transform = `translateX(-300px)`
      logo_svg.style.transform = `translateX(-150px)`
      logo_title.style.opacity = 0
      navbar.style.opacity = 0
      navbar.style.transform = `translateX(-150px)`
    }else {
      ellipse_1.style.transform = `translateX(0)`
      logo_svg.style.transform = `translateX(0)`
      logo_title.style.opacity = 1
      navbar.style.opacity = 1
      navbar.style.transform = `translateX(0)`
    }

  }

  render() {

    return (

      <div>

        <Container>
          <nav className="navbar">
            <Ellipse1  className="ellipse-1" />
            <div className="navbar-logo">
              <Logo />
              <span>Agence Pêche</span>
            </div>
            <ul className="navbar-content">
              <li className="navbar-item">
                <button>L'agence</button>
              </li>
              <li className="navbar-item">
                <button>Valeurs</button>
              </li>
              <li className="navbar-item">
                <button>Contact</button>
              </li>
            </ul>
          </nav>
        </Container>


        <Container>
          <Ellipse2 className="ellipse-2" />
          <section id="header">
            <div>
              <h1>Créateur de valeur ajoutée.</h1>
              <p>Nec sane haec sola pernicies orientem diversis cladibus adfligebat. Namque et Isauri, quibus est usitatum saepe</p>
              <button>découvrir l’agence <img src={require('../../img/polygone-1.png')} alt=""/></button>
              <Ellipse3 className="ellipse-3" />
            </div>
          </section>
        </Container>

        <Container>
          <Ellipse4 className="ellipse-4" />
          <section id="agency">
            <div className="line">
              <span></span>
            </div>
            <div className="content">
              <span>01</span>
              <p className="title">L'agence</p>
              <p className="description">
                Nec sane haec sola pernicies orientem diversis cladibus adfligebat. Namque et Isauri, quibus est usitatum saepe pacari saepeque inopinis excursibus cuncta miscere, ex latrociniis occultis et raris, alente inpunitate adulescentem in peius audaciam ad bella gravia proruperunt, diu quidem perduelles spiritus inrequietis motibus erigentes, hac tamen indignitate perciti vehementer, ut iactitabant, quod eorum capiti quidam consortes apud Iconium Pisidiae oppidum in amphitheatrali spectaculo feris praedatricibus obiecti sunt praeter morem.
              </p>
              <Cards>
                <TeamCard className="picture-1" job='Web Designer' name='Robin Brunetiere' img={require('../../img/equipe/1.jpg')} />
                <TeamCard className="picture-2" job='Web Designer' name='Fanny Mingant' img={require('../../img/equipe/2.jpg')} />
                <TeamCard className="picture-3" job='Développeur' name='Thibaud Crespin' img={require('../../img/equipe/3.jpg')} />
                <TeamCard className="picture-4" job='UX Designer' name='Lauren Dang' img={require('../../img/equipe/4.jpg')} />
              </Cards>
              <Cards>
                <TeamCard className="picture-5" job='Web Marketing' name='Auriane Kerdelhué' img={require('../../img/equipe/5.jpg')} />
                <TeamCard className="picture-6" job='Web Marketing' name='Alexandre Chanteloup' img={require('../../img/equipe/6.jpg')} />
                <TeamCard className="picture-7" job='Web Marketing' name='Ingrid Rigoussen' img={require('../../img/equipe/7.jpg')} />
                <TeamCard className="picture-8" job='Développeur' name='Thomas Dubois' img={require('../../img/equipe/8.jpg')} />
              </Cards>
            </div>
          </section>
        </Container>


        <Container>
          <Ellipse5 className="ellipse-5" />
          <section id="values">
            <div className="line">
              <span></span>
            </div>
            <div className="content">
              <span>02</span>
              <p className="title">Valeurs</p>
              <p className="description">
                Nec sane haec sola pernicies orientem diversis cladibus adfligebat. Namque et Isauri, quibus est usitatum saepe pacari saepeque inopinis excursibus cuncta miscere, ex latrociniis occultis et raris, alente inpunitate adulescentem in peius audaciam ad bella gravia proruperunt, diu quidem perduelles spiritus inrequietis motibus erigentes, hac tamen indignitate perciti vehementer, ut iactitabant, quod eorum capiti quidam consortes apud Iconium Pisidiae oppidum in amphitheatrali spectaculo feris praedatricibus obiecti sunt praeter morem.
              </p>
              <Cards>
                <ValuesCard img={require('../../img/strategie.png')} title="Stratégie" />
                <ValuesCard img={require('../../img/technique.png')} title="Technique" />
                <ValuesCard img={require('../../img/accompagnement.png')} title="Accompagnement" />
                <ValuesCard img={require('../../img/peche.png')} title="De la pêche" />
              </Cards>
            </div>
          </section>
        </Container>

        <Container>
          <section id="contact">
            <div className="line">
              <span></span>
            </div>
            <div className="content">
              <span>03</span>
              <p className="title">Contact</p>
              <p className="description">
                Nec sane haec sola pernicies orientem diversis cladibus adfligebat. Namque et Isauri, quibus est usitatum saepe pacari saepeque inopinis excursibus cuncta miscere, ex latrociniis occultis et raris, alente inpunitate adulescentem in peius audaciam ad bella gravia proruperunt, diu quidem perduelles spiritus inrequietis motibus erigentes, hac tamen indignitate perciti vehementer, ut iactitabant, quod eorum capiti quidam consortes apud Iconium Pisidiae oppidum in amphitheatrali spectaculo feris praedatricibus obiecti sunt praeter morem.
              </p>
              <form>
                <div className="name">
                  <div className="input-text">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" id="lastname" name="lastname" />
                  </div>
                  <div className="input-text">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" id="firstname" name="firstname" />
                  </div>
                </div>
                <div className="message">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="10"></textarea>
                </div>
                <div className="send">
                  <button>Envoyer
                    <img src={require('../../img/polygone-2.png')} alt=""/>
                  </button>
                </div>
              </form>
            </div>
          </section>
        </Container>


        <footer>
          <Container>
            <div>
              <button>Mentions légales</button>
              <div className="social-medias">
                <a href="https://www.facebook.com/agencepeche/" target="_blank">
                <img src={require('../../img/facebook.png')} alt=""/>
              </a>
              <a href="https://twitter.com/agencepeche" target="_blank">
              <img src={require('../../img/twitter.png')} alt=""/>
            </a>
          </div>
        </div>
      </Container>
    </footer>

  </div>

)

}

}

export default HOME;
