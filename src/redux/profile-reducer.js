const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 15},
        {id: 2, message: 'It\'s my first post!', likeCount: 20},
        {id: 3, message: 'I\'m here', likeCount: 5},
        {id: 4, message: 'It\'s my second post!', likeCount: 9},
        {id: 5, message: 'What\'s new?', likeCount: 3},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostId = state.posts.length + 1;
            let newPost = {
                id: newPostId,
                message: state.newPostText,
                likeCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
};

export const addPost = () => ({type: ADD_POST});

export const updateNewPostText = (newPostText) =>
    ({type: UPDATE_NEW_POST_TEXT, newPostText: newPostText,});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile})

export default profileReducer;