import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";


const SmurfsList = (props) => {

    useEffect (() => {
        props.getSmurfs()
    }, [])

   return (
    <>
    {console.log("these are list props:", props)}
     {props.smurfs?.map((item,i) => (
         <div key={i}>
         <h1>Smurf Name: {item.name}</h1> 
         <h2>Age: {item.age}</h2>
         <h3>Height: {item.height}</h3> 
         </div>
     ))}

    </>
   );

};

const mapStateToProps = (state) => {
     console.log(state)
    return {
         isLoading: state.fetchReducer.isLoading,
         smurfs: state.fetchReducer.smurfs,
         error: state.fetchReducer.error
         }

};

export default connect(mapStateToProps, { getSmurfs })(SmurfsList);