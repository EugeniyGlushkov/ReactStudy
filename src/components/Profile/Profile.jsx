import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.main_header}>
                <img className={s.main_header__pict} src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;