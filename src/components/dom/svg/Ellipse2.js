import React, { Component } from 'react'

class Ellipse2 extends Component {

  render() {

    const {className} = this.props

    return (
      
      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{fillRule: 'evenodd'}} width="551" height="1101">
      <defs>
        <linearGradient id="a" x1="0%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#ED7232"/>
          <stop offset="100%" stopColor="#FF3E4A"/>
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M550.5 1101C246.467 1101 0 854.532 0 550.5 0 246.467 246.467 0 550.5 0"/>
    </svg>


  )

}

}

export default Ellipse2;
