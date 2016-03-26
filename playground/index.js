import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
  component: 'div',
  childRoutes: [ {
    path: '/',
    component: require('./playground'),
  } ]
}

render(
  <Router history={browserHistory} routes={rootRoute} />,
  document.getElementById('root')
)