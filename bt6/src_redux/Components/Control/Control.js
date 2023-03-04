import React, { Component } from 'react'
import { connect } from 'react-redux';

class Control extends Component {
  constructor() {
    super();

    this.state = {
      userName: ''
    }
  }
  render() {
    const HandInput = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
    return (
      <div>
        {
          // console.log(this.props)
        }
        {/* <button onClick={() => this.props.Add("a")}>Add</button> */}
        <h3>{this.state.userName}</h3>
        <input name='userName' value={this.state.userName} onChange={HandInput}/>
        <button onClick={() => this.props.AddUser(this.state.userName)}>{this.props.userState.lsUser}</button>
      </div>
    )
  }
}

// Gắn các phương thức của mình to Props của component control
const mapDispathToProps = (dispath) => {
  return {
    AddUser: (newUser) => {
      dispath({
        type:'ADD_USER',
        payload:newUser
      })
    },
    DeleteUser: (newUser) => {
      dispath({
        type:'DELETE_USER',
        payload:newUser
      })
    }
  }
}

const mapStateToProps = (globalState) => {
  return {
    userState: globalState.userManage
  }
}

// export default connect(undefined, mapDispathToProps)(Control);
export default connect(mapStateToProps, mapDispathToProps)(Control);