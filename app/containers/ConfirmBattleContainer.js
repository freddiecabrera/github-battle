import React from 'react'
import ConfirmBattle from '../components/ConfirmBattle'
import githubHelpers from '../utils/gethubHelpers.js'
const ConfirmBattleContainer =  React.createClass ({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState () {
    console.log('getInitialState');
    return ({
      isLoading: true,
      playersInfo: []
    })
  },
  componentDidMount() {
    const query = this.props.location.query
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players){
        console.log(players);
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
      }.bind(this))
  },
  handleInitiateBattle(){
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },
  render () {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}
      />
    )
  }
})

module.exports = ConfirmBattleContainer
