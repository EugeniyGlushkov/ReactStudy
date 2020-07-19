import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts
        .map(post => <Post id={post.id} key={post.id} message={post.message} likeCounts={post.likeCount}/>);
    let onAddPost = () => {
        props.addPost();
    };
    let onRemovePost = () => alert('Remove post!!!');
    let onChangeNewPostText = (event) => {
        let newPostText = event.target.value;
        props.updateNewPostText(newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onChangeNewPostText} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
                <button onClick={onRemovePost}>Remove</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;