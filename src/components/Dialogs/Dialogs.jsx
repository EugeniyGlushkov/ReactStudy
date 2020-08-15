import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogElements = state.dialogs
        .map(dialog => <DialogItem id={dialog.id} key={dialog.id} name={dialog.name} avatarUrl={dialog.avatarUrl}/>);
    let messageElements = state.messages
        .map(message => <Message id={message.id} key={message.id} message={message.message} avatarUrl={message.avatarUrl}
                                 isYours={message.isYours}/>);
    let onSendMessageClick = () => {
        props.addNewMessage();
    };
    let onNewMessageTextChange = (event) => {
        let newMessageText = event.target.value;
        props.updateNewMessageText(newMessageText);
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
                        value={state.newMessageText}
                    />
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;