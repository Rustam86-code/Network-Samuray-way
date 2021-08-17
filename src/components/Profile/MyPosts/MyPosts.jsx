import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";


const MyPosts = (props) => {
debugger;
    let state=props.post._state.profilePage;


    let postsElements = state.posts.map(p =>
    <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

        return (
            <div className={s.item}>
                <div>
                    <h3>My Posts</h3>
                </div>
                <div>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>add Post</button>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        )
}
export default MyPosts;

