import React, { useContext } from 'react'
import { context } from '../../Store/Store'
import './Search.css'

export default function Search() {
    const ctx = useContext(context)
    const SetListCity = ctx.lsCityState[1];
    const HandleInput = (event) => {
        if (event.keyCode === 13) {
            fetch(`https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/weather/Search/${event.target.value}`)
                .then(res => res.json())
                .then(data => SetListCity(data))
            console.log(event.target.value)
        }
    }
    return (
        <div className='Search'>
            <input placeholder='Search ...' onKeyUp={HandleInput} />
            <p>Enter to search ...</p>
        </div>
    )
}
