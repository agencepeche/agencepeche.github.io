import React, { Component } from 'react'

class DOM_h1 extends Component {

  render() {

    const { content } = this.props

    return (
      <h1 className="DOM_h1">
        {content}
      </h1>
    )

  }

}

export default DOM_h1;
