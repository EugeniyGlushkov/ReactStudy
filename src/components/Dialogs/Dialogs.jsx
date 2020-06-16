import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/messages-reducer";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarUrl={dialog.avatarUrl}/>);
    let messageElements = props.state.messages
        .map(message => <Message id={message.id} message={message.message} avatarUrl={message.avatarUrl}
                                 isYours={message.isYours}/>);
    let onSendMessageClick = () => {
        props.dispatch(addNewMessageActionCreator());
    };
    let onNewMessageTextChange = (event) => {
        let newMessageText = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessageText));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.newMessageContainer}>
                    <textarea placeholder={'Enter new message'}
                        onChange={onNewMessageTextChange}
                        value={props.state.newMessageText}
                    />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;