import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatarUrl={dialog.avatarUrl}/>);
    let messageElements = props.state.messages
        .map(message => <Message id={message.id} message={message.message} avatarUrl={message.avatarUrl}
                                 isYours={message.isYours}/>);
    let newMessageElement = React.createRef();
    let onSendMessage = () => {
        props.addMessage();
    };
    let onNewMessageTextChange = () => {
        let newMessageText = newMessageElement.current.value;
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
                    <textarea onChange={onNewMessageTextChange}
                              value={props.state.newMessageText}
                              ref={newMessageElement}
                              />
                    <button onClick={onSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;