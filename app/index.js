import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'react-materialize'


const HelloWorld = React.createClass({
  render () {
    return (
      <div>
        <Button node='a' waves='light'>Hello World</Button>
      </div>
    )
  }
})

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
