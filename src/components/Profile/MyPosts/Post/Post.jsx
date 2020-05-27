import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={'logo'} src={'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg'}/>
            {props.message}
            <div>
                <span>like: {props.likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;