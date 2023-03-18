import React from 'react'
import './Games.css'
import { useNavigate } from 'react-router-dom'

export default function Games(props) {
  console.log(props.data)
  const data = props.data;
  const nav = useNavigate();

  const HandleSeeGame = () => {
    localStorage.setItem("isResult", true);
    nav('/results')
    window.location.reload(false);
  }

  const HandleRemoveGame = () => document.getElementById(data?.home_team.abbreviation).remove()

  return (
    <div className='Games' id={`${data?.home_team.abbreviation}`}>
      <div className='GamesHead'>
        <h3>{`${data?.home_team?.full_name} [${data?.home_team?.abbreviation}]`}</h3><button onClick={HandleRemoveGame}>X</button>
        <h5>{data?.home_team?.name} conference</h5>
        <hr />
      </div>
      <div className='GamesText'>
        <p>Results of part 12 days</p>
        <label> <b>W</b> <em>L</em> <b>W</b> <b>W</b></label>
        <p>Avg pts scored:{data?.home_team_score}</p>
        <p>Avg pts conceded:{data?.visitor_team_score}</p>
        <br />
        <button onClick={HandleSeeGame}>See game results {'>>'}</button>
      </div>
      <div className='GamesImg'>
        <img src={`https://interstate21.com/nba-logos/${data?.home_team.abbreviation}.png`} alt='ImageLogo'></img>
      </div>
    </div>
  )
}
