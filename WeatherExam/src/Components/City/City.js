import React, { useContext } from 'react'
import { context } from '../../Store/Store'
import './City.css'

export default function City(props) {

    // Set data use Context
    const ctx = useContext(context)
    const SetListWeather = ctx.lsWeatherState[1];

    const HandleClick = (event) => {
        event.preventDefault()

        // call API postcast
        fetch(`https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/weather/forecast?lat=${props.data.coord.lat}&lon=${props.data.coord.lon}`)
            .then(res => res.json())
            .then(data => SetListWeather(data.daily))
    }
    return (
        <a href='/' className='City' onClick={HandleClick}>
            <h3>
                <img src={`https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/weather/cityIcon/${props.data.sys.country.toLowerCase()}`} alt='CityIcon' />
                &nbsp;{props.data.name}
            </h3>
            <p>{props.data.coord.lat}, {props.data.coord.lon}</p>
        </a>
    )
}
