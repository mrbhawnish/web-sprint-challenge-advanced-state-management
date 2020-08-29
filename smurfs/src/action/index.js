import axios from "axios";


export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const getSmurfs = () => (dispatch) => {
     dispatch({type: FETCH_SMURF_START})
    return axios.get("http://localhost:3333/smurfs")
    .then((res) => {
        console.log(res.data)
    })
    .catch((err) => console.log("err", err))

}