import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import User from './Components/User/User'
import UserAdd from './Components/UserAdd/UserAdd'
import UserUpdate from './Components/UserUpdate/UserUpdate'
import LoginPrivateRoute from './RuleRouters/LoginPrivateRoute'


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='' element={
              <LoginPrivateRoute>
                <User />
              </LoginPrivateRoute>
            } />
            <Route path='login' element={<Login />} />
            <Route path='userAdd' element={
              <LoginPrivateRoute>
                <UserAdd />
              </LoginPrivateRoute>
            } />
            <Route path='userUpdate' element={
              <LoginPrivateRoute>
                <UserUpdate />
              </LoginPrivateRoute>
            } />
            <Route path='*' element={<h1>404</h1>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
