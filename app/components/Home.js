import React from'react'
const ReactRouter = require('react-router')
const Link = ReactRouter.Link

const Home = React.createClass({
  render () {
    return (
      <div className='col s12' style={{textAlign: 'center'}}>
        <h1>Github Battle</h1>
        <p>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className="waves-effect waves-light btn">Get Started</button>
        </Link>
      </div>
    )
  }
})

module.exports = Home
