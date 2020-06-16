const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageId = state.messages.length + 1;
            let newMessage = {
                id: newMessageId,
                message: state.newMessageText,
                avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
                isYours: true,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (newMessageText) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText,});

export default messagesReducer;