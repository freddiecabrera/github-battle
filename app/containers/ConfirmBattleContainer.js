import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'

const ConfirmBattleContainer =  React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    return ({
      isLoading: true,
      playersInfo: []
    })
  },
  render () {
    return (
      <ConfirmBattle />
    )
  }
})

module.exports = ConfirmBattleContainer
