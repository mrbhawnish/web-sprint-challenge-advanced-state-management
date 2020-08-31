import { FETCH_SMURF_START } from "../action";
import { FETCH_SMURF_SUCCESS } from "../action";
import { FETCH_SMURF_FAIL } from "../action";
import {POST_SMURF_START } from "../action";
import {POST_SMURF_SUCCESS} from "../action";
const initialState = [
  {
    name: " ",
    age: "",
    height: " ",
    id: Date.now(),
    errors: []
  },
];

export const reducer = (state = initialState, action) => { 
  switch (action.type) {
    case FETCH_SMURF_START:
      return state;
    case FETCH_SMURF_SUCCESS:
      return {...state,
       name: action.payload.name,
       age: action.payload.age,
       height: action.payload.height
    }
      case FETCH_SMURF_FAIL:
      return {...state,
       errors: action.payload
    }
    case  POST_SMURF_START:
      return{ state };
      // case  POST_SMURF_SUCCESS:
      // return{...state,
      // name: action.payload.name,
      // age: action.payload.name,
      // height: action.payload.name };

      default:
          return state;


  }
};

export default initialState;