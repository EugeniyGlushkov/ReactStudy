import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
               <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message={'Hi, how are you?'} likeCounts={15}/>
            <Post message={"It's my first post!"}  likeCounts={20}/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;