import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

const instanceWithApiKey = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '815a15e6-bfa6-4a5c-b2c2-6e7df308efd2'
    }
});

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => response.data);
    },

    follow(userId) {
        return instanceWithApiKey.post(`follow/${userId}`)
            .then(response => response.data.resultCode === 0);
    },

    unfollow(userId) {
        return instanceWithApiKey.delete(`follow/${userId}`)
            .then(response => response.data.resultCode === 0);
    }
};

export const authAPI = {
    getSelf() {
        return instance.get('auth/me')
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
};