import React from'react'
import { Link } from 'react-router'
import { centered } from '../styles/index.js'

const Home = React.createClass({
  render () {
    return (
      <div className='col s12' style={centered}>
        <h1>Github Brawl</h1>
        <p>See who is the top Gethub dog</p>
        <Link to='/playerOne'>
          <button type='button' className="waves-effect waves-light btn pink accent-3"><i className="material-icons left">play_circle_outline</i> Get started</button>
        </Link>
      </div>
    )
  }
})

module.exports = Home
