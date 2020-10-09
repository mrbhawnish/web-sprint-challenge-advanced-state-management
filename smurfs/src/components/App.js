import React, { Component } from "react";
import "./App.css";
import styled from "styled-components";
import SmurfsForm from "../components/SmurfsForm";
import SmurfsList from "../components/SmurfsList";
import img from "../img/smurfs.png";
class App extends Component {
  render() {
    return (
      <Wrapper>
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <img src={img}></img>
        <div>Welcome to your state management version of Smurfs!</div>
        <SmurfsForm />
        <SmurfsList />
       
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
   min-width: 100%;
   min-height: 100%;
   display: flex;
   flex-direction: column;

   background: linear-gradient(#00FAB4, #00B0EC);
   .App{
     
   }

   
`;
export default App;
