import React from 'react'
const PropTypes = React.PropTypes

const UserDetailsWrapper = props => {
  return (
    <div className='col s6'>
      <p>{props.header}</p>
      {props.children}
    </div>
  )
}

module.exports = UserDetailsWrapper
