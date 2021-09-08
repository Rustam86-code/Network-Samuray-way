import {combineReducers, createStore} from "redux";
import reducerProfile from "./ReducerProfile";
import reducerDialogs from "./ReducerDialogs";
import reducerSidebar from "./ReducerSidebar";
import reducerUsers from "./ReducerUsers";

let reducers = combineReducers({reducerProfile, reducerDialogs, reducerSidebar,
    usersPage: reducerUsers});

let reduxStore = createStore(reducers) ;


export default reduxStore;

