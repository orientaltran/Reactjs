import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Results() {
    const nav = useNavigate();

    const HandleBack = () => {
        localStorage.setItem("isResult", false);
        nav('/')
        window.location.reload(false);
    }
    return (
        <div>
            <h3>{`Sacramento Kings [SAC]`}</h3>
            <h5>western conference</h5>
            <hr />
            <p>Results of part 12 days:</p>
            <p><b>SAC</b>  110 - 100 <b> CHI</b></p>
            <p><b>SAC</b>  110 - 100 <b> CHI</b ></p >
            <p><b>SAC</b>  110 - 100 <b> CHI</b ></p >
            <p><b>SAC</b>  110 - 100 <b> CHI</b ></p >
            <p><b>SAC</b>  110 - 100 <b> CHI</b ></p >
            <p><b>SAC</b>  110 - 100 <b> CHI</b ></p >
            <br />
            <button onClick={HandleBack}> {'<<'}Back to all team stats</button>
        </div >
    )
}
