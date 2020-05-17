import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to={'/'} activeClassName={s.activeLink}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/'}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/'}>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/'}>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/'}>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/'}>Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo!!!</div>
            </div>
        </div>
    );
};

export default Dialogs;