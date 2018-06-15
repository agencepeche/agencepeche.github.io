import React, { Component } from 'react'

class Logo extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } viewBox="0 0 40 40">
      <g id="Calque_2" data-name="Calque 2">
        <g id="Calque_2-2" data-name="Calque 2">

          <path style={{
            fill:'none',
            stroke:'#fff',
            strokeLinecap:'round',
            strokeMiterlimit:10,
            strokeWidth:2
          }} d="M18.53,29.46a9.88,9.88,0,0,1-7.33,3.28A10.48,10.48,0,0,1,1,22,10.49,10.49,0,0,1,11.2,11.25a10,10,0,0,1,7.94,4"/>

          <path style={{
            fill:'none',
            stroke:'#fff',
            strokeLinecap:'round',
            strokeMiterlimit:10,
            strokeWidth:2
          }} d="M10.32,11.25A13.14,13.14,0,0,1,15.23,10a12,12,0,0,1,0,24,11.87,11.87,0,0,1-5.35-1.26"/>
          <path style={{
            fill:'none',
            stroke:'#fff',
            strokeLinecap:'round',
            strokeMiterlimit:10,
            strokeWidth:2
          }} d="M9.86,4.28s3.77,1.83,4.34,5"/>
          <path style={{
            fill:'none',
            stroke:'#fff',
            strokeLinecap:'round',
            strokeMiterlimit:10,
            strokeWidth:2
          }} d="M13.11,6.42s.41-6.94,10.24-5.11C23.35,1.31,22.18,10.5,13.11,6.42Z"/>
        </g>
      </g>
    </svg>


  )

}

}

export default Logo;
