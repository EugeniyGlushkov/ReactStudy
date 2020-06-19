import React from 'react';
import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage;
    let sendMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    };
    let updateNewMessageText = (newMessageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageText));
    };

    return (
        <Dialogs messagesPage={state}
                 sendMessage={sendMessage}
                 updateNewMessageText={updateNewMessageText}/>
    );
};

export default DialogsContainer;