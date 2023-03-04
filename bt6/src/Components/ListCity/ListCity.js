import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListCity extends Component {
    render() {
        return (
            <div>
                {
                    JSON.stringify(this.props.cityState)
                }
            </div>
        )
    }
}

const mapStateToProps = (globalState) => {
    return {
        cityState: globalState.cityManage
    }
}
const mapDispathToProps = (Dispath) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispathToProps)(ListCity)
