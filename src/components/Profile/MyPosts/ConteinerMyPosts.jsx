import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ReducerProfile";
import MyPosts from "./MyPosts";


const ConteinerMyPosts = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
debugger;
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
                     posts={state.reducerProfile.posts}
                     newPostText={state.reducerProfile.newPostText}/>)
}
export default ConteinerMyPosts;