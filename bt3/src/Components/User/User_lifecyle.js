import React, { Component } from 'react'


export default class User extends Component {
  constructor() { // Có thể call API trong constructor nếu API có kết quả trả về là ngắn, nhanh, gon, trước thằng rendder call
    // Nếu API chạy lâu thì reactjs nên bỏ vào componentDidMount
    super();

    this.state = {
      count: 0,
      data: [],
      // Phương thức khai báo với DOM không phụ thuộc vào component nên nó luôn chạy nên phải cần tới componentDidUpdate
      interval1000: setInterval(() => {
        console.log("Hello Guy!!!")
      }, 1000)
    }


    
    
  }

  componentDidMount() {
    console.log("UI rendered");
    // Call API // https://teachingserver.onrender.com/cinema/movie/38e37ef8-592e-4492-aa20-99f2b306e30d
    fetch("https://teachingserver.onrender.com/cinema/movie/38e37ef8-592e-4492-aa20-99f2b306e30d")
    .then(res => res.json())
    .then(dt => this.setState({data: dt}))
  }

  componentDidUpdate() {
    console.log("UI Updated");
    // Quản lý cập nhật dữ liệu
    if (this.state.count > 10) {
      this.setState({
        count: 10
      })
    }
  }

  componentWillUnmount() {
    console.log("UI Out");
    // Quản lý clearup
    clearInterval(this.state.interval1000)
  }

  render() {
    const HandUp = () => {
      this.setState({
        count: this.state.count + 1
      })
    }
    return (
      <div style={{background:"salmon"}}>
        {
          this.state.data.length == 0 ? <h1>Loading</h1> : <h1>{this.state.data.length}</h1>
        }
        <h1>{this.state.count}</h1>
        <button onClick={HandUp}>UP</button>
        
      </div>
    )
  }
}
