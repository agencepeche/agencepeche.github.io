import React, { Component } from 'react'

class Container extends Component {

  render() {

    return (

      <div className="relative">
        <div className="container">
          {this.props.children}
        </div>
      </div>

    )

  }

}

export default Container;
