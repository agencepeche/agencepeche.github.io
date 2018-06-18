import React, { Component } from 'react'

class Ellipse3 extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{fillRule: 'evenodd'}} width="110" height="110" viewBox="0 0 110 110">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#ED7232"/>
          <stop offset="100%" stopColor="#FF3E4A"/>
        </linearGradient>
      </defs>
      <path fill="url(#gradient)" d="M110,55 C110,68.4733728 100.692308,77.2169625 92.642998,86.7850099 C82.5542406,98.7830375 71.9013807,110 55,110 C37.642998,110 25.1893491,98.4792899 15.122288,85.9171598 C7.57199211,76.5009862 0,68.0177515 0,55 C0,40.2248521 19.7001972,34.6489152 29.1814596,24.7554241 C39.183432,14.3195266 39.4003945,0 55,0 C72.0966469,0 79.7337278,11.6508876 89.8224852,23.8658777 C97.6765286,33.3688363 110,41.7001972 110,55 Z"/>
    </svg>


  )

}

}

export default Ellipse3;
