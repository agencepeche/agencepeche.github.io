import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import HOME from '../pages/HOME'
import NOT_FOUND from '../pages/NOT_FOUND'

const Root = () => {
  return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HOME} />
          <Route exact path="/404" component={NOT_FOUND} />
        </Switch>
      </HashRouter>
  )
}

export default Root;
