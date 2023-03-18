import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [Email, setEmail] = useState("jpg")
    const [Password, setPassword] = useState("jpg")
    const nav = useNavigate();
    const HandleLogin = () => {
        fetch("http://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/Login", {
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ Email, Password })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                localStorage.setItem("email", data.Email)
                nav("/")
            })
    }
    return (
        <div>
            <label>Email</label>
            <input value={Email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
            <input value={Password} onChange={e => setPassword(e.target.value)} />
            <br />
            <button onClick={HandleLogin}>Login</button>
        </div>
    )
}
