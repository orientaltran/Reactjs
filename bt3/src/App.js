import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import User from './Components/User/User'

export default class App extends Component {
  render() {
    // React router Dom hổ trợ cho trang web sigle page
    return (
      <div>
        {/* Ký hiệu hổ trợ router */}
        <BrowserRouter>
          <h3>Header</h3>
          <Link to={'/'} >Login</Link>----
          <Link to={'/user'} >User</Link>
          <Routes>
            <Route path ='' element={<Login />} />
            <Route path ='user' element={<User />} />
          </Routes>
          <h3>Footer</h3>
        </BrowserRouter>
      </div>
    )
  }
}
