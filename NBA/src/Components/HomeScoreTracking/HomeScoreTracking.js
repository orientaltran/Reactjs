import React, { useContext, useEffect, useState } from 'react'
import { context } from '../../Store/Store';

export default function HomeScoreTracking() {

    const [lsTeam, setLsTeam] = useState([])
    const ctx = useContext(context)
    const SetListGame = ctx.lsGameState[1]

    useEffect(() => {
        GetUser();
    }, [])

    // Function GET USER
    const GetUser = () => {
        fetch("https://free-nba.p.rapidapi.com/teams", {
            method: "GET",
            params: { page: '0' },
            headers: {
                'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => {
                setLsTeam(data.data)
            })
    }

    // Function Handle click
    const HandlTracking = (event) => {
        event.preventDefault();
        fetch(`https://freenba.p.rapidapi.com/games?page=0&dates[]=2022-12-06&dates[]=2022-12-05&dates[]=2022-12-04&per_page=12&team_ids[]=${event.target.id.value}`, {
            method: 'GET',
            params: { page: '0', per_page: '12' },
            headers: {
                'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
                'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                SetListGame(data.data)
            }
            )
    }

    return (
        <div>
            <form onSubmit={HandlTracking}>
                <label>Choose a team:</label>
                <select id="Teams" name="id">
                    {
                        lsTeam.map((n, i) => {
                            return <option value={n.id} key={i}>{n.full_name}</option> //id la gia tri truyen vao ham
                        })
                    }
                </select>
                <button type='submit'>Track team</button>
            </form>
        </div>
    )
}
