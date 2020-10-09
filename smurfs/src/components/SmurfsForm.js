import React, { useState } from "react";
import { connect }  from "react-redux";
import styled from "styled-components";
import { postSmurf } from "../actions/index";

const defaultValue =
    {
      name: "",
      age: "",
      height: ""
    };


const SmurfsForm = (props) => {
  const [smurf, setSmurf] = useState(defaultValue)
  
const handleChanges = (e) => {
    e.persist()
   setSmurf({...smurf, 
   [e.target.name]: e.target.value})
};

const handleSubmit = (e) => {
    e.preventDefault();
    props.postSmurf(smurf)
}

  return (
   <form className="form" onSubmit={handleSubmit}>
       <div>
  <input
  type="text"
  name="name"
  value={smurf.name}
  placeholder="Smurf Name"
  onChange={handleChanges}
   />
   </div>

   <div>
   <input
  type="text"
  name="age"
  value={smurf.age}
  placeholder="Smurf Age"
  onChange={handleChanges}
   />
   </div>

   <div>
   <input
  type="text"
  name="height"
  value={smurf.height}
  placeholder="Smurf Height"
  onChange={handleChanges}
   />
   </div>
 <button onClick={handleSubmit}>Add Smurf</button>
   </form> 
  );
};
const mapStateToProps = (state) => {
   return {
       smurfs: state.postReducer.smurfs
   }
};

export default connect(mapStateToProps, {postSmurf})(SmurfsForm);