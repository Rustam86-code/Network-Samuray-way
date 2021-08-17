import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src={'https://yt3.ggpht.com/ytc/AKedOLQTOrbuh25vkoon4ROhjjbJXX3jVrEaAYK6BDUB=s900-c-k-c0x00ffffff-no-rj'}
                className={s.img}/>
            <div>{props.message}</div>
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;



