import React from 'react';
import Users from "./Users";
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC} from "../../Redux/ReducerUsers";

let mapStateToProps = (state) =>{
    return {
        users: state.usersPage.users
    }
};
debugger;
let mapDispatchToProps =(dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (userId) =>{
            dispatch(setUsersAC(userId))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);