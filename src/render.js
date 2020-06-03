import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {addPost, updateNewPostText, addMessage, updateNewMessageText} from "./redux/state";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}/>
        </BrowserRouter>,
        document.querySelector('#root')
    );
};