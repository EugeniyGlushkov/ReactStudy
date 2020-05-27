import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let url = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <img className={'logo'} src={props.avatarUrl}/>
            <NavLink to={url} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;