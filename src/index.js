import React from "react";
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} store={store}/>
        </BrowserRouter>,
        document.querySelector('#root')
    );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);