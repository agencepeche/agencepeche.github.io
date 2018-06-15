import React, { Component } from 'react'
import Tilt from 'react-tilt'

class TeamCard extends Component {

  render() {

    const { job, name, img, className } = this.props

    return (

      <Tilt className={(className) ? `card ${className}` : 'card'} options={{ max : 40 }} >
        <img src={img} alt=""/>
        <div className="job">
          <span className="job-line"></span>
          <span className="job-name">{job}</span>
        </div>
        <span className="name">{name}</span>
      </Tilt>

    )

  }

}

export default TeamCard;
