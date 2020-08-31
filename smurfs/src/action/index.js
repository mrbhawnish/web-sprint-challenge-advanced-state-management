import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";
export const POST_SMURF_START = "FETCH_SMURF_START";
export const POST_SMURF_SUCCESS = "FETCH_SMURF_SUCESS";
export const POST_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const getSmurfs = () => (dispatch) => {
     dispatch({type: FETCH_SMURF_START})
    return axios.get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("data", res.data)
  
     dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})


    })
    .catch((err) => {
        console.log("err", err.name)
      dispatch({type: FETCH_SMURF_FAIL, payload: err.message})
    
    })
}

export const addSmurf = (statee) => (dispatch) => {
  dispatch({type: POST_SMURF_START})
  return axios.post("http://localhost:3333/smurfs", statee)
  .then((res) => {
    // console.log("post from add", res.data)
    dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
})
.catch((err) => {
    console.log("err", err.name)
  dispatch({type: POST_SMURF_FAIL, payload: err.message})

})
}