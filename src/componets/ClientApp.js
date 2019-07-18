import React from 'react'
import Landing from './Landing'
import Search from './Search'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/search' component={Search} />
      </Switch>
    </div>
  </Router>
)

export default App
