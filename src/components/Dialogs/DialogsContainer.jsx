import React from 'react';
import Dialogs from "./Dialogs";
import {addNewMessage, updateNewMessageText} from "../../redux/messages-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    };
};

const DialogsContainer = connect(mapStateToProps,
    {addNewMessage, updateNewMessageText})(Dialogs);

export default DialogsContainer;