import React from 'react'
import { Link } from 'react-router'
import { centerText, btnMargin, centered } from '../styles'
import UserDetails from './UserDetails'
import UserDetailsWrapper from './UserDetailsWrapper'
import Loading from './Loading'
const PropTypes = React.PropTypes

const ConfirmBattle = (props) => {
  return props.isLoading === true
    ? <div className="progress" style={centered}>
        <div className="indeterminate"></div>
      </div>
    : <div className='container'>
        <div calssName='row'>
          <div className='col s12' style={centerText}>
            <h4>Confirm Players</h4>
            <div className='row'>
              <div className='col s12'>
                <UserDetailsWrapper header='Player One'>
                  <UserDetails info={props.playersInfo[0]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player Two'>
                  <UserDetails info={props.playersInfo[1]} />
                </UserDetailsWrapper>
              </div>
            </div>
            <div className='col s12'>
              <button className="waves-effect waves-light btn pink accent-3" onClick={props.onInitiateBattle} style={btnMargin}>Initiate Battle</button>
              <Link to='/playerOne'>
                <button type='button' className="waves-effect waves-light btn yellow darken-1" style={btnMargin}>Reselect Players</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}
module.exports = ConfirmBattle
