import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src='https://t2conline.com/wp-content/uploads/2019/03/000707-online-digital-eye-logo-free-logo-maker-02.png'
                 title={'logo'}/>

            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;