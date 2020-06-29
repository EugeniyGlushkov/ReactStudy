const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post!', likeCount: 20},
        {id: 3, message: 'I\'m here', likeCount: 5},
        {id: 4, message: 'It\'s my second post!', likeCount: 9},
        {id: 5, message: 'What\'s new?', likeCount: 3},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            let newPostId = state.posts.length + 1;
            let newPost = {
                id: newPostId,
                message: state.newPostText,
                likeCount: 0,
            };
            stateCopy.posts = [...stateCopy.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        default:
            return stateCopy;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (newPostText) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText,});

export default profileReducer;