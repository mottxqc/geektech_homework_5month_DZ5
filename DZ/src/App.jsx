import React from "react";
import { connect } from "react-redux";

import { addNumber, subtractNumber } from "../actions/counterActions.jsx";


function App(props) {
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <button onClick={props.addNumber}>Add 5</button>
      <button onClick={props.subtractNumber}>Subtract 5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: () => dispatch(addNumber()),
    subtractNumber: () => dispatch(subtractNumber()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);