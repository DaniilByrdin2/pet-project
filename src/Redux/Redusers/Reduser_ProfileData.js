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
        { id: 1, textPost: 'hi, my first post', likesCount: 12, },
        { id: 2, textPost: 'how are you?', likesCount: 52, },
        { id: 2, textPost: 'how are you?', likesCount: 52, }
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
        case USER_PROFILE: {
            return {
                ...state, 
                Profile_Users: action.pr
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state, 
                status: action.status
            }
        }
        case DELETE_Profile_Users: {
            return {
                ...state, 
                Profile_Users: null,
                status: '',
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
    }

    return state;
}

export const ProfileUsers = (pr) => ({ type: USER_PROFILE, pr })
export const onAddPost = (newPostUser)=> ({type: ADD_POST, newPost: {id: Date.now(), ...newPostUser, likesCount: 0} });

export const onPostChange = (text)=> ({type: UPDATE_NEW_POST, NewText: text,});
export const setUserStatus = (status)=> ({type: SET_USER_STATUS, status: status});
export const deleteProfile = () => ({type: DELETE_Profile_Users}) 
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
export const setUserProfilePageThunk = (id) => {
    return (dispatch) => {
        usersAPI.getUserProfile(id).then(res => {
            dispatch(ProfileUsers(res));
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