import React, { Component } from 'react'
import User from './Components/User/User'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isShow: false // true: Mounting, false:Unmounting
    }
  }

  render() {
    const  ShowToggle = () => {
      this.setState({
        isShow: !this.state.isShow
      })
    }
    return (
      <div>
        <h4>State: {this.state.isShow + ""}</h4>
        <button onClick={ShowToggle}>Show or Hide</button>
        {this.state.isShow && <User />}
      </div>
    )
  }
}
