const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Dimych',
            avatarUrl: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg'
        },
        {
            id: 2,
            name: 'Andrew',
            avatarUrl: 'https://едавпоход.рф/wp-content/uploads/2018/05/man.png'
        },
        {
            id: 3,
            name: 'Sveta',
            avatarUrl: 'https://fotograf-kuchin.ru/wp-content/uploads/2017/06/people.png'
        },
        {
            id: 4,
            name: 'Sasha',
            avatarUrl: 'https://cdn.esquimaltmfrc.com/wp-content/uploads/2015/09/flat-faces-icons-circle-woman-9.png'
        },
        {
            id: 5,
            name: 'Viktor',
            avatarUrl: 'https://forexi.ru/wp-content/uploads/2019/02/teacher1.png'
        },
        {
            id: 6,
            name: 'Valera',
            avatarUrl: 'https://sun9-53.userapi.com/a2_T4m9sl6j4cDNGh15RxHzNtD5EycdboQBz-Q/8TWkikReziE.jpg'
        }
    ],
    messages: [
        {
            id: 1,
            message: 'Hi!',
            avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
            isYours: true,
        },
        {
            id: 2,
            message: 'How is your it-kamasutra?',
            avatarUrl: 'https://c7.hotpng.com/preview/980/886/491/computer-icons-icon-design-avatar-flat-face-icon.jpg',
            isYours: false,
        },
        {
            id: 3,
            message: 'Yo!!!',
            avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
            isYours: true,
        },
        {
            id: 4,
            message: 'Yo!!!',
            avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
            isYours: true,
        },
        {
            id: 5,
            message: 'Yo!!!',
            avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
            isYours: true,
        }
    ],
    newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessageId = state.messages.length + 1;
            let newMessage = {
                id: newMessageId,
                message: state.newMessageText,
                avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
                isYours: true,
            };
            stateCopy.messages = [...stateCopy.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        default:
            return stateCopy;
    }
};

export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageTextActionCreator = (newMessageText) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: newMessageText,});

export default messagesReducer;