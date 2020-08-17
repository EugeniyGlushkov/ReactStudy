import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>;
    }

    let contacts = Object.keys(props.profile.contacts).map(contact =>
        props.profile.contacts[contact] &&
        <li>
            {`${contact}: `}<a href={props.profile.contacts[contact]}>{`${props.profile.contacts[contact]}`}</a>
        </li>
    );

    return (
        <div>
            <div className={s.main_header}>
                <img className={s.main_header__pict} src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={props.profile.photos.large}/>
                <ul className={s.info}>
                    <li><b>Full name: </b>{props.profile.fullName}</li>
                    {props.profile.aboutMe && <li><b>About me: </b>{props.profile.aboutMe}</li>}
                    <li>
                        <b>{props.profile.lookingForAJob ? 'In search of a new job' : 'I am busy'}</b>
                        {props.profile.lookingForAJobDescription && `:  ${props.profile.lookingForAJobDescription}`}
                    </li>
                    <li><b>Contacts</b>
                        <ul className={s.info}>
                            {contacts}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileInfo;