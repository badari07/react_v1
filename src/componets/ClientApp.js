import React from 'react'
import Layout from './Layout'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Route path='/' component={Layout} />
  </Router>
)

export default App
