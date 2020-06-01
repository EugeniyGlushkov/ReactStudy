import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import state from './redux/state'
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";

ReactDOM.render(
    <BrowserRouter>
        <App state={state} addPost={addPost}/>
    </BrowserRouter>,
    document.querySelector('#root')
);