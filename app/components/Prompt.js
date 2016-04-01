import React from 'react'
const centerText = require('../styles').centerText
const PropTypes = React.PropTypes

const Prompt = props => {
  return (
    <div className='container'>
      <div className="row">
        <div className='col s6 offset-s3'>
          <h1 style={centerText}>{props.header}</h1>
          <div className='col s12'>
            <form onSubmit={props.onSubmitUser}>
              <div className='input-field'>
                <input placeholder="Github Username" type="text" onChange={props.onUpdateUser} value={props.username} />
              </div>
              <div className='col s4 offset-s4'>
                <button type='submit' className="waves-effect waves-light btn">Continue</button>
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
