import React, { Component } from 'react'

class Ellipse1 extends Component {

  render() {

    const {className} = this.props

    return (

      <svg xmlns="http://www.w3.org/2000/svg" className={ (className) ? className : '' } style={{ fillRule: 'evenodd'}} width="582" height="582">
      <defs>
          <linearGradient id="a" x1="0%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#ED7232"/>
              <stop offset="100%" stopColor="#FF3E4A"/>
          </linearGradient>
      </defs>
      <path fill="url(#a)" d="M496.768 496.768c-113.642 113.643-297.893 113.643-411.536 0C-28.41 383.125-28.41 198.875 85.233 85.232c113.642-113.642 297.893-113.642 411.535 0 113.643 113.643 113.643 297.894 0 411.536z"/>
    </svg>


  )

}

}

export default Ellipse1;
