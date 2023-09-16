import axios from "axios";

const instanse = axios.create({
    baseURL: 'https:\\social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "08109da0-1ddf-4802-990f-add145cae174"
    }
})

export const usersAPI = {
    getUsers( page, sizePage ) {
        return instanse.get(`users?page=${page}&count=${sizePage}`)
            .then( res => {
                return res.data;
            });
    },
    unFollowAPI(id) {
        return instanse.delete(`follow/${id}`).then( res => {
            return res.data;
        })
    },
    followAPI(id) {
        return instanse.post(`follow/${id}`).then(res => {
            return res.data;
        })
    },
    authMe() {
        return instanse.get(`auth/me`).then( res => {
            return res.data
        })
    },
    getUserProfile(id) {
        return instanse.get('profile/' + id)
    }
}

export const LoginAPI = {
    login(email, password, rememberMe) {
        return instanse.post('/auth/login', { email, password, rememberMe })
    },
    logOut() {
        return instanse.delete('/auth/login')
    }
}


export const ProfileAPI = {
    getProfileStatus(userID) {
        return instanse.get(`profile/status/${userID}`);
    },
    updateProfileStatus(status) {
        return instanse.put(`profile/status`, { "status" : status});
    },
    setPhotos(file) {
        let formData = new FormData();
        formData.append('image', file)
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}


