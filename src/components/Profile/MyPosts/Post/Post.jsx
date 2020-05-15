import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.logo} src={'https://kursor.kiev.ua/images/icons/teacher_woman.png'}/>
            {props.message}
            <div>
                <span>like: {props.likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;