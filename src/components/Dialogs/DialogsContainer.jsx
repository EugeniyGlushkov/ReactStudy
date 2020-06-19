import React from 'react';
import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagesPage;
                let sendMessage = () => {
                    store.dispatch(addNewMessageActionCreator());
                };
                let updateNewMessageText = (newMessageText) => {
                    store.dispatch(updateNewMessageTextActionCreator(newMessageText));
                };
                return (<Dialogs messagesPage={state}
                                 sendMessage={sendMessage}
                                 updateNewMessageText={updateNewMessageText}/>);
            }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;