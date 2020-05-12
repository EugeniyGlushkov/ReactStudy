import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img className={s.logo} src={'https://kursor.kiev.ua/images/icons/teacher_woman.png'}/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;