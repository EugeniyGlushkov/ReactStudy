let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
let TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';

let initalState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
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
                users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(userId => userId !== action.userId)
            };
        default:
            return state;
    }
};

export const follow = (userId) => ({type: FOLLOW, userId: userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching});
export const toggleIsFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId
});

export default usersReducer;