import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../action/index";
import SmurfForm from "./SmurfForm"

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

        <h1>Name: {this.props.name}</h1>
        <h1>age: {this.props.age}</h1>
        <h1>height: {this.props.height}</h1>
        <SmurfForm></SmurfForm>
        <button onClick={() => this.props.getSmurfs()}>Get smurf</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name,
    age: state.age,
    height: state.height
  }
};

const mapDispatchToProps = {getSmurfs} ;

export default connect(mapStateToProps, mapDispatchToProps)(App);
