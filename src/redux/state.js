let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likeCount: 15},
                {id: 2, message: 'It\'s my first post!', likeCount: 20},
                {id: 3, message: 'I\'m here', likeCount: 5},
                {id: 4, message: 'It\'s my second post!', likeCount: 9},
                {id: 5, message: 'What\'s new?', likeCount: 3},
            ],
            newPostText: '',
        },
        messagesPage: {
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
            newMessageText:'',
        },
        navbar: {
            friends_bar: [
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
            ],
        },
    },
    _callSubscriber() {
        console.log('There are no subscribers.')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPostId = this._state.profilePage.posts.length + 1;
        let newPost = {
            id: newPostId,
            message: this._state.profilePage.newPostText,
            likeCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber();
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber();
    },
    addMessage() {
        let newMessageId = this._state.messagesPage.messages.length + 1;
        let newMessage = {
            id: newMessageId,
            message: this._state.messagesPage.newMessageText,
            avatarUrl: 'https://corp.exkavator.ru/native/src/o-man.png',
            isYours: true,
        };
        this._state.messagesPage.messages.push(newMessage);
        this._state.messagesPage.newMessageText = '';
        this._callSubscriber();
    },
    updateNewMessageText(newMessageText) {
        this._state.messagesPage.newMessageText = newMessageText;
        this._callSubscriber();
    }
};

window.store = store;

export default store;