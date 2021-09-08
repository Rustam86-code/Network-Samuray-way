import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ConteinerMyPosts from "./MyPosts/ConteinerMyPosts";



const Profile = (props) => {
debugger;
    return <div className={s.content}>
    <ProfileInfo/>
         <ConteinerMyPosts store={props.stateProfile} />
    </div>
}

export default Profile;