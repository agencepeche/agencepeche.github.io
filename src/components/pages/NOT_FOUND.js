import React, { Component } from 'react'
import Container from '../assets/Container'
import DOM_link from '../dom/DOM_link'
import DOM_h1 from '../dom/DOM_h1'

class NOT_FOUND extends Component {

  render() {

    return (

      <Container>
        <DOM_h1 content="NOT FOUND" />
        <DOM_link url="/" content="Go to home" />
      </Container>

    )

  }

}

export default NOT_FOUND;
