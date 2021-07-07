import React, { useState } from "react";
import { connect } from "react-redux";
import initialState from "../reducer/index"
import { addSmurf } from "../action/index"
import "./App.css";
const SmurfForm = (props) => {
    const [info, setInfo] = useState(...initialState)


    const handleChanges = (e) => {
     setInfo({...info,
        [e.target.name]: e.target.value})
    }
    const addSmurf = (e) => {
      e.preventDefault()
      props.addSmurf(info)
    }

  return (

    <React.Fragment>
    
  <form  className="SmurfForm">
    
      <label>
          Name:
      </label>
      <input name="name" type="text" value={info.name} onChange={handleChanges}></input>
      <label>
         Age:
      </label>
      <input name="age" type="text" value={info.age} onChange={handleChanges}></input>
      <label>
          Height:
      </label>
      <input name="height" type="text" value={info.height} onChange={handleChanges}></input>
    <button onClick={addSmurf}>Add smurf</button>
  </form>

    </React.Fragment>
  )
};

const mapDispatchToProps = { addSmurf}

export default connect(null, mapDispatchToProps)(SmurfForm);
