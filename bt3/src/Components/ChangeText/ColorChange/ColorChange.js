import React, { Component } from 'react'

export default class ColorChange extends Component {
  render() {
    return (
      <div>
          <button onClick={() => this.props.HandleChangeColor("red")}>Red</button>
          <button onClick={() => this.props.HandleChangeColor("blue")}>Blue</button>
          <button onClick={() => this.props.HandleChangeColor("green")}>Green</button>
      </div>
    )
  }
}
