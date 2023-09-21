import {usersAPI} from '../../DAL/API';
import {ProfileAPI} from '../../DAL/API';
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST_TEXT';
const USER_PROFILE = 'USER_PROFILE'; 
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_Profile_Users = 'DELETE_Profile_Users';
const SET_USER_PHOTO = 'SET_USER_PHOTO';

let InizializatoeStore = {
    Posts: [
        { id: 1, textPost: 'hi, my first post', likesCount: 12, date: "00:51:15 Sep 21 2023", photoPost: null },
        { id: 2, textPost: 'how are you?', likesCount: 52, date: "00:55:15 Sep 21 2023", photoPost: null },
        { id: 2, textPost: 'how are you?', likesCount: 52, date: "02:55:15 Sep 21 2023", photoPost: null }
    ],
    Profile_Users: null,
    status: '',
}

const Reduser_ProfilePage = ( state = InizializatoeStore, action ) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                Posts: [...state.Posts, action.newPost],
            }
        }    
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.NewText
            }
        }        
        case SET_USER_PHOTO: {
            return {
                ...state, 
                Profile_Users: {...state.Profile_Users, 
                    data: {...state.Profile_Users.data, photos: action.photo}  
                }
            }
        }    
        case SET_USER_STATUS: {
            return {
                ...state, 
                status: action.status
            }
        }
        case USER_PROFILE: {
            return {
                ...state, 
                Profile_Users: action.pr
            }
        }
        case DELETE_Profile_Users: {
            return {
                ...state, 
                Profile_Users: null,
                status: '',
            }
        }   
    }

    return state;
}

export const setUserProfilePageThunk = (id) => {
    return (dispatch) => {
        usersAPI.getUserProfile(id).then(res => {
            dispatch(ProfileUsers(res));
        })
    }
}
export const ProfileUsers = (pr) => ({ type: USER_PROFILE, pr })
export const deleteProfile = () => ({type: DELETE_Profile_Users}) 


export const onAddPost = (newPostUser, photo) => { 
    console.log(photo);

    const hour = new Date().toTimeString().split(' ')[0]
    const month = new Date().toDateString().split(' ');
    const datePost = [ hour, month[1], month[2], month[3] ].join(' ')

    return {type: ADD_POST, newPost: { id: Date.now(), ...newPostUser, likesCount: 0, date: datePost, photoPost: photo } };
}


export const onPostChange = (text)=> ({type: UPDATE_NEW_POST, NewText: text,});

export const setUserStatus = (status)=> ({type: SET_USER_STATUS, status: status});
export const setUserPhoto = (photo) => ({type: SET_USER_PHOTO, photo })

export const getUserStatusThunk = (userID) => {
    return (dispatch) => {
        ProfileAPI.getProfileStatus(userID).then( res => {
            dispatch(setUserStatus(res.data));
        } )
    }
}
export const updateUserStatusThunk = (status) => {
    return (dispatch) => {
        ProfileAPI.updateProfileStatus(status).then( res => {
            if(res.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
    }
}
export const setPhotoProfile = (file) => {
    return dispatch => {
        ProfileAPI.setPhotos(file).then( res => {
            if(res.data.resultCode === 0) {
                dispatch(setUserPhoto(res.data.data.photos));
            }
        })
    }
}
export default Reduser_ProfilePage;