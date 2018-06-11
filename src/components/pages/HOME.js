import React, { Component } from 'react'
import Container from '../assets/Container'
import DOM_link from '../dom/DOM_link'
import DOM_h1 from '../dom/DOM_h1'

class HOME extends Component {

  render() {

    return (

      <Container>
        <DOM_h1 content="HOME" />
        <DOM_link url="/404" content="Go to 404" />
      </Container>

    )

  }

}

export default HOME;
