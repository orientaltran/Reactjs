import React, { Component } from 'react'
import ColorChange from './ColorChange/ColorChange'

export default class ChangeText extends Component {
  render() {
    return (
      <div>
          <input name="age" onChange={this.props.HandleInput}/>
          <ColorChange HandleChangeColor={this.props.HandleChangeColor}/>
      </div>
    )
  }
}
