import React from 'react'
import { centered } from '../styles/index.js'
const Loading = React.createClass({
  render(){
    return (
      <div className="progress" style={centered}>
        <div className="indeterminate"></div>
      </div>
    )
  }
})

module.exports = Loading
