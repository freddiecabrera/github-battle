import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-materialize'

var USER_DATA = {
  name: 'Freddie Cabrera',
  username: 'freddiecabrera',
  image: 'https://avatars1.githubusercontent.com/u/10556877?v=3&s=460'
}

const Link = React.createClass ({
  changeURL () {
  window.location.replace(this.props.href)
  },
  render () {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}} onClick={this.changeURL}>
        {this.props.children}
      </span>
    )
  }
})

const ProfilePic = React.createClass ({
  render () {
    return (
      <div>
        <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
      </div>
    )
  }
})

const ProfileLink = React.createClass ({
  render () {
    return (
      <div>
        <Link href={`https://www.github.com/${this.props.username}`}>
          {this.props.username}
        </Link>
      </div>
    )
  }
})

const ProfileName = React.createClass ({
  render () {
    return (
      <div>{this.props.name}</div>
    )
  }
})

const Avatar = React.createClass ({
  render () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username}/>
      </div>
    )
  }
})

ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'))
