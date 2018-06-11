import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DOM_link extends Component {

  render() {

    const { url, content } = this.props

    return (
      <Link to={url} className="DOM_link">
        {content}
      </Link>
    )

  }

}

export default DOM_link;
