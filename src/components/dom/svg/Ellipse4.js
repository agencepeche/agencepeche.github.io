import React, { Component } from 'react'

class Ellipse4 extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{fillRule: 'evenodd'}} width="377" height="754">
      <defs>
        <linearGradient id="a" x1="0%" y1="0%" y2="0%">
          <stop offset="0%" stop-color="#ED7232"/>
          <stop offset="100%" stop-color="#FF3E4A"/>
        </linearGradient>
      </defs>
      <path fill="url(#a)" fill-rule="evenodd" d="M0 0c208.211 0 377 168.789 377 377S208.211 754 0 754"/>
    </svg>


  )

}

}

export default Ellipse4;
