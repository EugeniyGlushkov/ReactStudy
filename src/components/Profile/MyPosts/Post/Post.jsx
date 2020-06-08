import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={'logo'} src={'https://corp.exkavator.ru/native/src/o-man.png'}/>
            {props.message}
            <div>
                <span>like: {props.likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;