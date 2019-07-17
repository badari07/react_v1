import React from 'react'
import Landing from './Landing'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => (
  <Router >
    <Route path='/' component={Landing} />
  </Router>
)

export default App
