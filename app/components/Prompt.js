import React from 'react'
import { centered, centerText } from '../styles/index.js'
const PropTypes = React.PropTypes

const Prompt = props => {
  return (
    <div className='container' style={centered}>
      <div className="row">
        <div className='col s6 offset-s3'>
          <h4>{props.header}</h4>
          <div className='col s12'>
            <form onSubmit={props.onSubmitUser}>
              <div className='input-field'>
                <input placeholder="Github Username" type="text" onChange={props.onUpdateUser} value={props.username} />
              </div>
              <div className='col s4 offset-s4'>
                <button type='submmit' className="btn-floating btn-large waves-effect waves-light pink accent-3"><i className="material-icons">add</i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  }

module.exports = Prompt
