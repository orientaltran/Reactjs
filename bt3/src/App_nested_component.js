import React, { Component } from 'react'
import ChangeText from './Components/ChangeText/ChangeText'
import User from './Components/User/User'

export default class App extends Component {
  // nested component : các component có thẻ lòng ghép và tương tác với nhau
  // Thằng react chỉ truyền vào được không thể truyền ra được,Nếu muốn truyền ra được phải thông qua 1 phương thức thằng cha
  constructor() {
    super();

    this.state = {
      name: "DongTP1",
      age: "23",
      color: "white"
    }
  }

  render() {
    const HandleInput = (event) => {
      console.log(event.target.value)
      console.log(event.target.name)
      this.setState({
        // name:event.target.value
        [event.target.name] : event.target.value
      })
    }

    const HandleChangeColor = (colorName) => {
      this.setState({
        color: colorName
      })
    }

    return (
      <div>
        <input name="name" onChange={HandleInput}/>
        {/* <input name="age" onChange={HandleInput}/> */}
        <h3>Age: {this.state.age}</h3>
        <User name={this.state.name} color={this.state.color}/>
        {/* Truyền cái cấu trúc cho nó chứ k thực thi fuction */}
        <ChangeText 
          HandleInput={HandleInput} 
          HandleChangeColor={HandleChangeColor}
        />
        {/* <button onClick={() => HandleChangeColor("red")}>Red</button> */}
      </div>
    )
  }
}
