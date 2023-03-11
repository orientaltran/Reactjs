import React, { useContext } from 'react'
import City from './Components/City/City'
import Search from './Components/Search/Search'
import Weather from './Components/Weather/Weather'
import './App.css'
import { context } from './Store/Store'

export default function App() {
  const ctx = useContext(context)
  const [lsCity] = ctx.lsCityState;
  return (
    <div className='app'>
      <Search />
      <div className='CityPlace'>
        {
          lsCity.map((v, i) => {
            return <City key={i} data={v} />
          })
        }
      </div>
      <Weather />
    </div>
  )
}
