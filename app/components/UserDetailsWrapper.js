import React from 'react'
const PropTypes = React.PropTypes

const UserDetailsWrapper = props => {
  return (
    <div className='col s6'>
      <h6>{props.header}</h6>
      {props.children}
    </div>
  )
}

module.exports = UserDetailsWrapper
