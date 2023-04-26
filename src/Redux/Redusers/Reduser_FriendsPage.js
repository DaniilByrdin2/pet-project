import {usersAPI} from '../../DAL/API'
let Follow = 'Follow';
let UnFollow = 'UnFollow';
let SET_USERS = 'SET_USERS';
let totalUsers = 'totalUsers';
let curPage = 'currentPage';
let toogleFetching = 'toogleIsFetching';
let toogleDisableBTN = 'toogleDisableBTN';
let arrowCreator = 'arrowCreator';
let arrowCreatorFirst = 'arrowCreatorFirst';

let InizializatoeStore = {
    UsersList: [],
    totalUsers: 0,
    sizePage: 10,
    numberPage: 1,
    isFetching: false,
    toogleDisableUsesr: [],
    arrow: [5],
    pages: [1,2,3,4,5],
}

const Reducer_FriendsPage = (state = InizializatoeStore, action) => {
    switch (action.type) {
        case Follow:
            return {
                ...state,
                UsersList: state.UsersList.map( ( u ) => { 
                    if(u.id === action.userID) {
                        return  { ...u, followed: true}
                    }    
                    return u
                } )
            }       
        case UnFollow:
        return {
            ...state,
            UsersList: state.UsersList.map( ( u ) => { 
                if(u.id === action.userID) {
                    return  { ...u, followed: false}
                }    
                return u
            } )
        }
        case SET_USERS:  {
            return {...state, UsersList: action.users }
        }
        case totalUsers: {
            return {...state, totalUsers: action.int}
        }  
        case curPage: {
            return {...state, numberPage: action.int}
        }  
        case toogleFetching: {
            return {...state, isFetching: action.isFetching}
        }
        case toogleDisableBTN: {
            return {...state, 
                toogleDisableUsesr: action.isFetcID ? 
                [...state.toogleDisableUsesr, action.id]
                : state.toogleDisableUsesr.filter(
                id => id != action.id)
            }
        }
        case arrowCreator: {
            let q = action.c + 1;
            return {
                ...state,
                arrow: [...state.arrow, action.c],
                pages: [...state.pages, action.c].slice(1, q),
                numberPage: ++state.numberPage,
            }
        }
        case arrowCreatorFirst: {
            return {
                ...state,
                arrow: [...state.arrow].slice(0, [...state.arrow].length - 1),
                pages: [action.c, ...[...state.pages].slice(0, 4)],
                numberPage: --state.numberPage,
            }
        }
        default:
            return state;
    }
}

// action
export let follow = (userID) => ( {type:Follow, userID } );
export let unfollow = (userID) => ( {type:UnFollow, userID} );
export let setUsers = (users) => ( {type: SET_USERS, users} );
export let setTotalUsers = (int) => ( {type: totalUsers, int} );
export let currentPage = (int) => ( {type: curPage, int} );
export let toogleIsFetching = (isFetching) => ({ type: toogleFetching, isFetching });
export let toogleDisable = (isFetcID, id) => ({ type: toogleDisableBTN, isFetcID, id});
export let arrowAC = (c) => ({ type: arrowCreator, c});
export let arrowACFirst = (c) => ({ type: arrowCreatorFirst, c});
// thunk 
export let onPageChange = (p, sizePage) => {
    return (dispatch) =>  {
        dispatch(toogleIsFetching(true));
        dispatch(currentPage( p ));
        usersAPI.getUsers(p, sizePage).then( data => {
            dispatch(setUsers(data.items));
            dispatch(toogleIsFetching(false));
        }) 
    }
}
export let onPageArrowFirst = (p, sizePage) => {
    return (dispatch) =>  {
        let c = --p;
        if (c > 0) {
            dispatch(toogleIsFetching(true));
            dispatch(arrowACFirst(c));
            usersAPI.getUsers(c, sizePage).then(data => {
                dispatch(setUsers(data.items));
                dispatch(toogleIsFetching(false));
            })
        }
    }
}
export let onPageArrow = (p, sizePage) => {
    return (dispatch) =>  {
        let c = ++p;
        dispatch(toogleIsFetching(true));
        dispatch( arrowAC( c ));
        usersAPI.getUsers(c, sizePage).then( data => {
            dispatch(setUsers(data.items));
            dispatch(toogleIsFetching(false));
        }) 
    }
}


export let firstUsers = (numberPage, sizePage) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true));
        usersAPI.getUsers(numberPage, sizePage)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsers(data.totalCount));
                dispatch(toogleIsFetching(false));
            })
    }
}
export let thunkUnfollow = (id) => {
    return (dispatch) => {
        dispatch(toogleDisable(true, id));
        usersAPI.unFollowAPI(id)
            .then(res => {
                if (res.resultCode == 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toogleDisable(false, id));
            })
    }
}
export let thunkFollow = (id) => {
    return (dispatch) => {
        dispatch(toogleDisable(true, id));
        usersAPI.followAPI(id)
            .then(res => {
                if (res.resultCode == 0) {
                    dispatch(follow(id))
                }
                dispatch(toogleDisable(false, id));
            })
    }
}

export default Reducer_FriendsPage;