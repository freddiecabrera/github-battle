import React from 'react'

const Main = React.createClass({
  render () {
    return (
      <div className='main-containe'>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main
