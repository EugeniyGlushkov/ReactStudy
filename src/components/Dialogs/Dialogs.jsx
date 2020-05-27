import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarUrl={dialog.avatarUrl}/>);
    let messageElements = props.state.messages
        .map(message => <Message id={message.id} message={message.message} avatarUrl={message.avatarUrl} isYours={message.isYours}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;