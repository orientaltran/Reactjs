import React, { Component } from 'react'
import User from './Components/User/User'

export default class App extends Component {
  constructor() {
    super(); // Bắt buộc:Kêu gọi kế thừa

    // re-render: Khi state thay đổi thì toàn bộ chổ nào dùng phải thay đổi, Nó có thể tương tác toàn bộ HTML
    this.state = {
      name: "DongTP1",
      count:0
    }
    this.state.name = "DONGTP2" // Thay thế
    // this.state = {} // Ghi đè
  }
  render() {
    let name = "ABC";
    const HandUp = () => {
      this.setState({
        count: this.state.count + 1
      })
      // this.state.count += 1
    }
    return (
      <div>
        <User name="DongTP1" age={20} count={this.state.count} upFake={HandUp}></User>
        <h1>{this.state.name}</h1>
        <h1>{name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={HandUp}>Up</button>
      </div>
    )
  }
}
