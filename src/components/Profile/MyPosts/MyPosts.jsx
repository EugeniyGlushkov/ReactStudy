import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts
        .map(post => <Post id={post.id} message={post.message} likeCounts={post.likeCount}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;