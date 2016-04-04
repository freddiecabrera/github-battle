const React = require('react')
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
const Main = require('../components/Main')
const Home = require("../components/Home")
const PromptContainer = require('../containers/PromptContainer')
const ConfirmBattleContainer = require('../containers/ConfirmBattleContainer')

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer}/>
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer}/>
      <Route path='/battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
)

module.exports = routes
