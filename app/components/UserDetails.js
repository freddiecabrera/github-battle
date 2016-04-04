import React from 'react'
const PropTypes = React.PropTypes

const UserDetails = user => {
  return (
    <div>
      <ul className='collection'>
        {!!user.score && <li className='collection-item' ><h3>Score: {user.score}</h3></li>}
        <img src={user.info.avatar_url} />
        {user.info.name && <li className='collection-item' >Name: {user.info.name}</li>}
        <li className='collection-item' >Username: {user.info.login}</li>
        {user.info.location && <li className='collection-item' >Location: {user.info.location}</li>}
        {user.info.company && <li className='collection-item' >Company: {user.info.company}</li>}
        <li className='collection-item' >Followers: {user.info.followers}</li>
        <li className='collection-item' >Following: {user.info.following}</li>
        <li className='collection-item' >Public Repos: {user.info.public_repos}</li>
        {user.info.blog && <li className='collection-item' >Blog: <a href={user.info.blog}> {user.info.blog}</a></li>}
      </ul>
    </div>
  )
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
}

module.exports = UserDetails
