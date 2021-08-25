import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ReducerProfile";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (reduxStore) =>{
    debugger;
    return {
        posts: reduxStore.reducerProfile.posts,
        newPostText: reduxStore.reducerProfile.newPostText
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
            },
            addPost: () =>{
                dispatch(addPostActionCreator());
            }
        }
    }

const ConteinerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default ConteinerMyPosts;



// const CConteinerMyPosts = (props) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
//     }
// debugger;
//     return (<MyPosts updateNewPostText={onPostChange} addPost={addPost}
//                      posts={state.reducerProfile.posts}
//                      newPostText={state.reducerProfile.newPostText}/>)
// }
// export default ConteinerMyPosts;