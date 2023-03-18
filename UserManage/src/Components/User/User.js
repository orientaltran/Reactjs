import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function User() {
    const nav = useNavigate();
    const [lsUser, setLsUser] = useState([])
    const HandleLogout = () => {
        localStorage.removeItem("email")
        nav('/login')
    }

    useEffect(() => {
        GetUser();
    }, [])

    // Function GET USER
    const GetUser = () => {
        fetch("http://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user")
            .then(res => res.json())
            .then(data => setLsUser(data))
    }
    // Function Update
    const MoveToUpdate = (e, userInfo) => {
        e.preventDefault()

        nav('/userUpdate', {
            state: userInfo
        })
    }

    // Function Delete
    const DeleteUser = (e, userInfo) => {
        e.preventDefault()

        fetch("http://teachingserver.org/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/user/user", {
            method: "DELETE",
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Email": userInfo.Email
            })
        }).then(res => {
            if (res.status === 200) {
                GetUser();
                alert("Delete success~!!!")
                nav("/")
            } else {
                alert("Delete failse~!!!")
            }
        })

    }


    return (
        <div>
            <button onClick={HandleLogout}>Logout</button>
            <Link to={'/UserAdd'}>Add</Link>
            {
                lsUser.map((n, i) => {
                    return <p key={i}>
                        <a href='/' onClick={e => DeleteUser(e, n)}>X</a>
                        <a href='/' onClick={e => MoveToUpdate(e, n)}>Update</a>
                        <a href='/'>n.Name</a>
                    </p>
                })
            }
        </div>
    )
}
