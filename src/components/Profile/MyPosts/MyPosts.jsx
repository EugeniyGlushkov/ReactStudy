import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.posts
        .map(post => <Post id={post.id} message={post.message} likeCounts={post.likeCount}/>);
    let newPostElement = React.createRef();
    let onAddPost = () => {
        let newPostText = newPostElement.current.value;
        alert(newPostText);
    };
    let onRemovePost = () => alert('Remove post!!!');

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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