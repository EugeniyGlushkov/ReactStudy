import React from 'react';
import s from '../Dialogs.module.css';

const Message = (props) => {
    let messageBody = props.isYours
        ? (
            <div className={`${s.message_container} ${s.your_message}`}>
                <span className={s.message}>{props.message}</span>
                <img className={'logo'}
                     src={props.avatarUrl}/>
            </div>
        )
        : (
            <div className={`${s.message_container} ${s.friends_message}`}>
                <img className={'logo'}
                     src={props.avatarUrl}/>
                <span className={s.message}>{props.message}</span>
            </div>
        );


    return messageBody;
};

export default Message;