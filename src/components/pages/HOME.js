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
const svg_ellipse_3_transition = 'M110,55 C110,68.4733728 100.692308,77.2169625 92.642998,86.7850099 C82.5542406,98.7830375 71.9013807,110 55,110 C37.642998,110 25.1893491,98.4792899 15.122288,85.9171598 C7.57199211,76.5009862 0,68.0177515 0,55 C0,40.2248521 19.7001972,34.6489152 29.1814596,24.7554241 C39.183432,14.3195266 39.4003945,0 55,0 C72.0966469,0 79.7337278,11.6508876 89.8224852,23.8658777 C97.6765286,33.3688363 110,41.7001972 110,55 Z'

const svg_ellipse_1_origin = 'M496.768 496.768c-113.642 113.643-297.893 113.643-411.536 0C-28.41 383.125-28.41 198.875 85.233 85.232c113.642-113.642 297.893-113.642 411.535 0 113.643 113.643 113.643 297.894 0 411.536z'

const svg_ellipse_1_animation = 'M520.476477,514.043114 C509.419619,525.201871 481.869309,509.613733 462.837696,514.043114 C441.618397,518.981654 429.172216,552.455731 414.287786,559.629021 C398.665752,567.157787 373.111707,551.34056 356.523719,553.925643 C334.86088,557.301594 321.928386,577.845001 299.788938,578.464037 C280.489668,579.00366 278.786432,557.350863 259.724054,553.925643 C248.002092,551.819384 237.244101,562.583175 220.583768,564.965773 C212.293776,566.151327 187.569428,593.067575 168.367188,564.965773 C163.447212,557.765562 155.422522,544.850059 149.668747,539.004664 C141.513399,530.719455 125.29567,551.341826 101.068119,532.506809 C99.1187308,519.606994 98.8829129,504.794051 91.9200577,497.766966 C87.2506025,493.054436 62.7674502,496.920156 58.4928277,491.960938 C49.3208994,481.320093 65.4247838,462.003215 58.4928277,450.286917 C54.9942813,444.373722 26.6386319,433.552183 23.5346131,427.438579 C18.488231,417.499342 27.1418053,396.787495 23.5346131,386.484375 C20.4347949,377.630453 3.69307354,365.232343 1.32158087,356.375158 C-1.78393192,344.776513 16.9750228,334.443133 15.7929687,322.882813 C14.9149348,314.295765 1.32158087,299.857178 1.32158087,291.536417 C1.32158087,277.631736 8.38420531,265.446882 15.7929687,252.742188 C21.1212556,243.605136 9.08992023,221.149551 7.77734375,215.878906 C1.32158087,189.955818 30.3595738,189.955818 30.3595738,180.785311 C30.3595738,163.513201 15.4046374,125.440155 40.3085938,113.773438 C50.9484018,108.789023 62.1600686,76.0735382 70.0930085,68.0674193 C180.542733,-43.4011715 410.026753,-6.84114668 520.476477,104.627444 C532.692865,116.956524 541.63348,132.97402 539.147767,148.107791 C536.121125,166.534905 520.498603,184.452682 528.076479,202.918011 C533.618849,216.423334 552.001633,225.808781 560.742379,235.804142 C572.210033,248.917822 539.147767,273.345598 553.720393,288.250299 C568.293019,303.155001 574.491368,323.948783 560.742379,343.324895 C551.181469,356.798848 560.003796,385.78944 553.720393,401.299669 C546.854847,418.246887 519.326131,418.246887 528.076479,450.286917 C536.826828,482.326947 534.256185,500.136415 520.476477,514.043114 Z'

const svg_ellipse_1_animation_2 = 'M493.59375,516.933594 C482.536892,528.09235 468.367551,543.383119 449.335938,547.8125 C428.116638,552.751039 414.056305,531.831374 399.171875,539.004664 C383.549841,546.53343 376.287206,562.38069 359.699219,564.965773 C338.03638,568.341725 331.631636,554.033308 309.492188,554.652344 C290.192918,555.191966 283.519409,583.015064 264.457031,579.589844 C252.735069,577.483585 212.785334,571.441621 196.125,573.824219 C187.835009,575.009772 166.449088,553.657895 160.695313,547.8125 C152.539964,539.527291 138.610364,549.79986 114.382813,530.964844 C112.433424,518.065028 83.0558636,506.152085 76.0930085,499.125 C71.4235532,494.41247 43.2915298,490.685048 36.3595738,478.96875 C32.8610274,473.055554 39.4635926,436.031572 36.3595738,429.917969 C31.3131917,419.978731 17.384536,408.939838 13.7773437,398.636719 C10.6775255,389.782797 29.2972739,358.384529 26.9257812,349.527344 C23.8202685,337.928699 -3.95554908,295.635207 1.69921875,289.505184 C21.7929687,267.722656 15.0899202,233.840958 13.7773437,228.570312 C7.32158087,202.647224 36.3595738,189.955818 36.3595738,180.785311 C36.3595738,163.513201 21.4046374,125.440155 46.3085938,113.773438 C56.9484018,108.789023 68.1600686,76.0735382 76.0930085,68.0674193 C186.542733,-43.4011715 416.026753,-6.84114668 526.476477,104.627444 C538.692865,116.956524 528.96219,142.799822 526.476477,157.933594 C523.449835,176.360708 547.117437,169.542484 554.695312,188.007812 C560.237682,201.513136 545.954567,227.864014 554.695312,237.859375 C566.162967,250.973055 561.868781,274.600483 576.441406,289.505184 C591.014032,304.409886 581.84274,330.151232 568.09375,349.527344 C558.532841,363.001297 548.041215,383.12649 541.757812,398.636719 C534.892266,415.583937 545.944964,418.246887 554.695312,450.286917 C558.807528,465.344089 538.723618,501.250358 533.019531,511.09375 C526.585939,522.19603 500.897702,509.56233 493.59375,516.933594 Z'

class HOME extends Component {

  componentDidMount() {

    document.addEventListener('scroll', this.detectScroll)

    const ellipse_3 = document.querySelector('.ellipse-3 path')
    const ellipse_1_path = document.querySelector('.ellipse-1 path')

    let i = 0
    setInterval( () => {
      ellipse_3.style.transform = `rotate(${i}deg)`
      i+=2.5
    }, 1000)

    const tl_ellipse_3 = new TimelineMax({repeat: -1, repeatDelay: 0})
    tl_ellipse_3.add(TweenLite.to(ellipse_3, 2, {morphSVG:svg_ellipse_3_animation}))
    tl_ellipse_3.add(TweenLite.to(ellipse_3, 2, {morphSVG:svg_ellipse_3_transition}))

    // const tl_ellipse_1 = new TimelineMax({repeat: -1, repeatDelay: 0})
    // tl_ellipse_1.add(TweenLite.to(ellipse_1_path, 1.5, {morphSVG:svg_ellipse_1_animation}))
    // tl_ellipse_1.add(TweenLite.to(ellipse_1_path, 1.5, {morphSVG:svg_ellipse_1_animation_2}))


    setTimeout( () => {
      document.querySelector('.ellipse-2').style.right = 0
    }, 1000)

  }

  detectScroll = (e) => {

    const ellipse_1 = document.querySelector('.ellipse-1')
    // const ellipse_2 = document.querySelector('.ellipse-2')
    const logo_svg = document.querySelector('.navbar-logo svg')
    const logo_title = document.querySelector('.navbar-logo span')
    const navbar = document.querySelector('.navbar-content')

    if (window.innerWidth > 1024) {
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

    // ellipse_2.style.transform = `translateY(${(window.scrollY*0.8)}px)`

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
          {/* <Ellipse4 className="ellipse-4" /> */}
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
