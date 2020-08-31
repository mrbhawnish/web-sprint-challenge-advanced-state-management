import React, { useState } from "react";
import { connect } from "react-redux";
import initialState from "../reducer/index"
import { addSmurf } from "../action/index"

const SmurfForm = (props) => {
    const [info, setInfo] = useState(...initialState)


    const handleChanges = (e) => {
        console.log(e.target.name)
     setInfo({...info,
        [e.target.name]: e.target.value})
    }

  return (
  <form>
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
    <button onClick={() => props.addSmurf(info)}>Add smurf</button>
  </form>
    
  )
};

const mapDispatchToProps = { addSmurf}

export default connect(null, mapDispatchToProps)(SmurfForm);
