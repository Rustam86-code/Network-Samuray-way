import {combineReducers, createStore} from "redux";
import reducerProfile from "./ReducerProfile";
import reducerDialogs from "./ReducerDialogs";
import reducerSidebar from "./ReducerSidebar";

let reducers = combineReducers({reducerProfile, reducerDialogs, reducerSidebar});

let reduxStore = createStore(reducers) ;


export default reduxStore;

