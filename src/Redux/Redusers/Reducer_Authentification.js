import {usersAPI, LoginAPI} from '../../DAL/API';
import { stopSubmit } from 'redux-form';
import { deleteProfile } from '../Redusers/Reduser_ProfileData';
const SET_DATA_USER = 'SET_DATA_USER';
const SET_AUTH_DATA_USER = 'SET_AUTH_DATA_USER';
const DELETE_AUTH_DATA_USER = 'DELETE_AUTH_DATA_USER';
const SET_USER_ID = 'SET_USER_ID';


let InizializatoeStore = {
    login: null,
    id: null,
    email: null,
    isAuth: false,
    password: null,
}

const Reducer_Authentification = (state = InizializatoeStore, action) => {
    switch (action.type) {
        case SET_DATA_USER: {
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }
        }
        case SET_AUTH_DATA_USER: {
            return {
                email: action.dataAuth.login,
                login: 'зареган',
                isAuth: true,
                password: action.dataAuth.password,
                id: action.res,
            }
        }
        case DELETE_AUTH_DATA_USER: {
            return {
                login: null,
                id: null,
                email: null,
                isAuth: false,
                password: null,
            }
        }
        case SET_USER_ID: {
            return {
                ...state,
                id: action.id
            }
        }
    }
    return state;
}
export const setAuthUser = (data) => ({type: SET_DATA_USER, userData: {...data} });
export const setAuthUserLogin = (objData, res) => ({type: SET_AUTH_DATA_USER,  dataAuth: objData, res: res });
export const deleteAuthUser = () => ({type: DELETE_AUTH_DATA_USER});
export const setUserID = (id) => ({type: SET_USER_ID, id});

export const thunkAuthMe = () => {
    return (dispatch) => {
        return usersAPI.authMe().then(res => {
                // console.log(res);
                if (res.resultCode === 0) {
                    dispatch(setAuthUser(res.data))
                }
            })
    }
}
export const thunkLoginUser = (objData) => {
    return dispatch => {
        return LoginAPI.login(objData.login, String(objData.password), objData.rememberMe).then( res => {
            // let usID = res.data.data.userId;
            if( res.data.resultCode === 0 ) {
                // dispatch(setUserID(res.data.data.userId));
                dispatch(setAuthUserLogin(objData, res.data.data.userId));
            } else {
                let message = res.data.resultCode > 0 ? res.data.messages : 'Some error';
                let action = stopSubmit( 'login', {_error: message});
                dispatch(action);
            }
        })
    }
}
export const thunkLogOutUser = () => {
    return dispatch => {
        LoginAPI.logOut().then( res => {
            if( res.data.resultCode === 0 ) {
                dispatch(deleteAuthUser());
                dispatch(deleteProfile());
            }
        })    
    }
}

export default Reducer_Authentification;