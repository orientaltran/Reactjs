import moment from 'moment/moment'
import React, { useContext } from 'react'
import { context } from '../../Store/Store';
import './Weather.css'

export default function Weather() {
    // Get data use Context
    const ctx = useContext(context);
    const [lsWeather] = ctx.lsWeatherState;
    return (
        <div className='Weather'>
            {
                lsWeather.map((v, i) => {
                    return <div className='WeatherCard' key={i}>
                        <img src={`https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/weather/weatherIcon/${v.weather[0].icon}`} alt='WeatherIcon' />
                        <p>{v.temp.day}°C</p>
                        <p>{moment(v.dt * 1000).format('ddd')}</p>
                    </div>
                })
            }
        </div>
    )
}
