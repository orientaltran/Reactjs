import React, { Component } from 'react'
import { connect } from 'react-redux';
//import { useSelector, useDispatch } from "react-redux";
//import { increment, decrement } from "./Redux/Actions/actCounter";

class Counter extends Component {
  render() {
    return (
      <div>Counter</div>
    )
  }
}

//const counter = useSelector((state) => state.counter);
//const dispatch = useDispatch();
    
export default connect(undefined, undefined)(Counter);
