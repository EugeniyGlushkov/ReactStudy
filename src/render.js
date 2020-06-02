import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {addPost, changeNewPostText} from "./redux/state";

export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} changeNewPostText={changeNewPostText}/>
        </BrowserRouter>,
        document.querySelector('#root')
    );
};