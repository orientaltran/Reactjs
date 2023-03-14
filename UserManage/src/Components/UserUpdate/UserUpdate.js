import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function UserUpdate() {
  // Cach truyen du lieu di vo cung bao mat
  const loc = useLocation()
  const [Name, SetName] = useState(loc.state.Name)
  const [Password, SetPassword] = useState('')

  const nav = useNavigate()

  const HandleUpdate = () => {
    fetch("https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user", {
      method: "PUT",
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Email: loc.state.Email,
        Name: Name,
        Password: Password,
      })
    }).then(res => {
      if (res.status === 200) {
        alert("Update success~!!!")
        nav("/")
      } else {
        alert("Update failse~!!!")
      }
    })
  }
  return (
    <div>
      <p>Email {loc.state.Email}</p>
      <p>Name</p>
      <input value={Name} onChange={e => SetName(e.target.value)} />
      <p>Password</p>
      <input value={Password} onChange={e => SetPassword(e.target.value)} />
      <button onClick={HandleUpdate}>Sumit</button>
      {/* {
        JSON.stringify(loc.state)
      } */}
    </div>
  )
}
