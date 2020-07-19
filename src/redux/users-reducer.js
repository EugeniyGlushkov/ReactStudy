let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET-USERS';

let initalState = {
    users: []
};

const usersReducer = (state = initalState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }

                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }

                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...state.users,
                    ...action.users
                ]
            };
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});

export default usersReducer;