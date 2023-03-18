import React, { useContext } from 'react'
import Games from './Components/Games/Games';
import HomeScoreTracking from './Components/HomeScoreTracking/HomeScoreTracking'
import './App.css'
import { context } from './Store/Store';
import Results from './Components/Results/Results';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {

  const ctx = useContext(context)
  const [lsGame] = ctx.lsGameState
  const isResult = localStorage.getItem("isResult")

  return (
    <div className='app'>
      <h1>NBA Score Stracking App</h1>

      <BrowserRouter>
        {(isResult === null || isResult === 'false') && <HomeScoreTracking />}
        <div className='GameTracking'>
          {(isResult === null || isResult === 'false') &&
            lsGame?.map((v, i) => {
              return <Games key={i} data={v} />
            })
          }
        </div>

        <Routes>
          <Route path='/results' element={<Results />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

