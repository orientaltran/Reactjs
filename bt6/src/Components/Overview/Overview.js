import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionType from '../../Redux/ActionType';

class Overview extends Component {
    constructor() {
        super();
        this.state = {
            keySearch: ""
        }

        // Controlled component: Đáp ứng nhu cầu đọc lại thông tin và set được thông tin mới 
    }

    render() {
        const HandleInput = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const Search = () => {
            // fetch(`https://vietcpq.name.vn/U2FsdGVkX18MaY1VB6bVfvVBm0wdPflO/weather/Search/${this.state.keySearch}`)
            //     .then(res => res.json())
            //     .then(dt => {
            //         // console.log(dt)
            //         this.props.RequestCity(dt);
            //     })
            this.props.RequestCity(this.state.keySearch);
        }

        return (
            <div>
                <input value={this.state.keySearch} name="keySearch" onChange={HandleInput} />
                <h1>{this.state.keySearch}</h1>
                <button onClick={Search}>Search</button>
            </div>
        )
    }
}

const mapStateToProps = (globalState) => {
    return {

    }
}
const mapDispathToProps = (Dispath) => {
    return {
        RequestCity: (key) => {
            Dispath({
                type: ActionType.city.GET_DATA,
                payload: key
            })
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Overview)