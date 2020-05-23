import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.main_header}>
                <img className={s.main_header__pict} src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
};

export default ProfileInfo;