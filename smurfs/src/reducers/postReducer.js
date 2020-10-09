import {
  POST_SMURF_START,
  POST_SMURF_SUCCESS,
  POST_SMURF_ERROR,
} from "../actions/index";

const initialState = {
  isLoading: false,
  smurfs: [],
  error: "",
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: [action.payload],
        error: "",
      };
    case POST_SMURF_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
