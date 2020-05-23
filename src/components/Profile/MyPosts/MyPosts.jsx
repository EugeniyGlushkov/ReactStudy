import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post!', likeCount: 20},
        {id: 3, message: 'I\'m here', likeCount: 5},
        {id: 4, message: 'It\'s my second post!', likeCount: 9},
        {id: 5, message: 'What\'s new?', likeCount: 3},
    ];

    let postElements = posts
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