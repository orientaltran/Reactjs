import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      minisecond: 0,
      second: 0,
      interval1: 0
    }
  }

  componentDidUpdate() {
    console.log("UI Updated");
    // Quản lý cập nhật dữ liệu
    if (this.state.minisecond === 1000) {
      this.setState({
        second: this.state.second + 1,
        minisecond: 0,
      })
    }
  }

  render() {
    const HandleStart = () => {
      this.state.interval1 = setInterval(() => {
        this.setState({
          minisecond: this.state.minisecond + 1
        })
      }, 100);
    }

    const HandleStop = () => {
      clearInterval(this.state.interval1)
    }

    return (
      <div className='stopwatch'>
        <h3>Stopwatch</h3>
        <div className='stopwatch-time'>
          <p>{this.state.second} : {this.state.minisecond}</p>
          <div className='buttons'>
            <button onClick={HandleStart}>Start</button>
            <button onClick={HandleStop}>Stop</button>
          </div>
        </div>
      </div>
    )
  }
}
