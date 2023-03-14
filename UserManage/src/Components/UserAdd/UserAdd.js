import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserAdd() {
  const [Email, SetEmail] = useState([])
  const [Name, SetName] = useState([])
  const [Password, SetPassword] = useState([])
  const [Role, SetRole] = useState([])

  const nav = useNavigate()
  const HandleAdd = () => {
    fetch("https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user", {
      method: "POST",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email, Name, Password, Role,
      })
    }).then(res => {
      if (res.status === 200) {
        alert("Add success~!!!")
        nav("/")
      } else {
        alert("Add failse~!!!")
      }
    })
  }
  return (
    <div>
      <label>Email</label>
      <input value={Email} onChange={e => SetEmail(e.target.value)} />
      <label>Name</label>
      <input value={Name} onChange={e => SetName(e.target.value)} />
      <label>Password</label>
      <input value={Password} onChange={e => SetPassword(e.target.value)} />
      <label>Role</label>
      <input value={Role} onChange={e => SetRole(e.target.value)} />
      <br />
      <button onClick={HandleAdd}>Submit</button>
    </div>
  )
}
