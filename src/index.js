import React from "react";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./components/App";
import {Provider} from "./StoreContext";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.querySelector('#root')
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree();
});