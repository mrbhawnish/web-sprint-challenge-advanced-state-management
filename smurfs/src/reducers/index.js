import { combineReducers } from "redux";
import { fetchReducer } from "./fetchReducer";
import { postReducer} from "./postReducer";

export default combineReducers({ 
    fetchReducer,
    postReducer
})