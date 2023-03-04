import React, { Component } from 'react'
import ListCity from './Components/ListCity/ListCity'
import Overview from './Components/Overview/Overview'

export default class App extends Component {
  render() {
    return (
      // Fragment: <> </> hổ trợ thay thẻ div in nội dung bên trong như không phát sinh thẻ div
      // <React.Fragment></React.Fragment>

      <>
       <Overview />
        <ListCity />
      </>
    )
  }
}
