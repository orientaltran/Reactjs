import React, { Component } from 'react'

export default class Control extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.Add("a")}>Add</button>
      </div>
    )
  }
}
