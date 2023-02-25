import React, { Component } from 'react'
import Control from './Components/Control/Control'
import User from './Components/User/User'

export default class App extends Component {
  // constructor() {
  //   super();
    
  //   this.state = {
  //       lsUser: [1,2,3]
  //   }
  // }

  render() {
    // const Add = (newUser) => {
    //   this.setState({
    //     lsUser: [...this.state.lsUser, newUser]
    //   })
    // }
    return (
      <div>
        {/* <Control Add={Add}/> */}
        <Control />
        {/* <User lsUser={this.state.lsUser}/> */}
        <User />
      </div>
    )
  }
}
