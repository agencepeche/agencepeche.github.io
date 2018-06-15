import React, { Component } from 'react'
import Tilt from 'react-tilt'

class ValuesCard extends Component {

  render() {

    const { title, img, className } = this.props

    return (

      <Tilt className={(className) ? `card ${className}` : 'card'} options={{ max : 40 }} >
        <img src={img} alt=""/>
        <span>{title}</span>
      </Tilt>

    )

  }

}

export default ValuesCard;
