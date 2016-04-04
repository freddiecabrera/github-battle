import React from 'react'
import { centerText, btnMargin, centered } from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import { Link } from 'react-router'
const PropTypes = React.PropTypes

const Results = props => {
  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1
  let losingIndex = winningIndex === 0 ? 1 : 0
  return (
      <div className='container'>
        <div calssName='row'>
          <div className='col s12' style={centerText}>
            <h4>Results</h4>
            <div className='row'>
              <div className='col s12'>
                <UserDetailsWrapper header='Top Dog'>
                  <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
                </UserDetailsWrapper>
              </div>
            </div>
            <div className='col s12'>
              <Link to='/playerOne'>
                <button type='button' className="waves-effect waves-light btn pink accent-3" style={btnMargin}>New game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results
