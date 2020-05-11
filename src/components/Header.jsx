import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo}
                 src='https://t2conline.com/wp-content/uploads/2019/03/000707-online-digital-eye-logo-free-logo-maker-02.png'
                 title={'logo'}/>
        </header>
    );
};

export default Header;