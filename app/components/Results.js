import React from 'react'
const PropTypes = React.PropTypes

const puke = obj => {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

const Results = props => {
  return (
    <div>{puke(props)}</div>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results
