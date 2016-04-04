import axios from 'axios'

const getUserInfo = username => axios.get(`https://api.github.com/users/${username}`)
const getRepos = username => axios.get(`https://api.github.com/users/${username}/repos`)

const getTotalStars = repos => {
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  }, 0)
}
const getPlayersData = player => {
  return getRepos(player.login)
    .then(getTotalStars)
      .then(totalStars => {
        return {
          followers: player.followers,
          totalStars: totalStars
        }
      })
}
const calculateScores = players => {
  return [
    players[0].followers * 3 + (players[0].totalStars || 0),
    players[1].followers * 3 + (players[1].totalStars || 0)
  ]
}


const helpers = {
  getPlayersInfo: players => {
    return axios.all(players.map(username => {
      return getUserInfo(username)
    })).then(info => {
      return info.map(user => {
        return user.data
      })
    }).catch(err => {console.log(err)})
  },
  battle: players => {
    const playerOneData = getPlayersData(players[0])
    const playerTwoData = getPlayersData(players[1])

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
        .catch(err => { console.log('Error in getPlayersData ', err)})
  }
}

module.exports = helpers
