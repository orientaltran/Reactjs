import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        {
          JSON.stringify(this.props)
        }
        <h3>{this.props.count}</h3>
        <button onClick={this.props.upFake}>Up Fake</button>
      </div>
    )
  }
}
