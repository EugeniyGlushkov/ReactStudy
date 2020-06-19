import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let changeNewPostText = (newPostText) => {
                    let action = updateNewPostTextActionCreator(newPostText);
                    store.dispatch(action);
                };
                return (
                    <MyPosts updateNewPostText={changeNewPostText}
                             addPost={addPost}
                             posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}/>);
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;