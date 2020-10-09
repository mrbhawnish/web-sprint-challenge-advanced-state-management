import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR";

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_ERROR = "POST_SMURF_ERROR";

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("succes get", res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("err get", err);
      dispatch({ type: FETCH_SMURFS_SUCCESS });
    });
};

export const postSmurf = (smurf) => (dispatch) => {
    dispatch({ type: POST_SMURF_START })
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
      console.log("succes POST", res);
    })
    .catch((err) => {
      console.log("ERRR post", err);
      dispatch({ type: POST_SMURF_ERROR, payload: err });
    });
};
