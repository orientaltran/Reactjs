import React, { Component } from 'react'

export default class App extends Component {
  // Để cập nhật được thông tin liên tục thì phải có thằng constuctor -> state
  constructor() {
    super(); // Là đối tượng dùng để kế thừa các đối tượng trong App và Component

    this.state =  {
      sec: 0,
      mili: 0,
      idInterval: null
    }
  }

  componentDidUpdate() {
    if (this.state.mili >= 1000) {
      this.setState({
        sec: this.state.sec + 1,
        mili: 0
      })
    }
  }

  render() {
    const HandleStart = () => {
      this.setState({
        idInterval: setInterval(() => {
          this.setState({
            mili: this.state.mili + 1
          })
        }, 10)
      })
    }

    const HandleStop = () => {
      clearInterval(this.state.idInterval)
    }

    return (
      <div>
        <p>{this.state.sec} . {(this.state.mili + "").padStart(2, "0")}</p>
        <button onClick={HandleStart}>Start</button>
        <button onClick={HandleStop}>Stop</button>
      </div>
    )
  }
}
