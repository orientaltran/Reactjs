import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <h1 style={
          // Data dạng json
          {
            color:"white",
            backgroundColor: this.props.color
          }
          } >Name: {this.props.name}</h1>
      </div>
    )
  }
}
