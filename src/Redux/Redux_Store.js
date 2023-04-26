import {applyMiddleware, combineReducers} from 'redux';
import { createStore } from 'redux';
import Reduser_DialogsPage from './Redusers/Reduser_DialogsPage';
import Reduser_ProfilePage from './Redusers/Reduser_ProfileData';
import Redusers_SideBar from './Redusers/Reduser_SideBar';
import Reducer_FriendsPage from './Redusers/Reduser_FriendsPage';
import Reducer_Authentification from './Redusers/Reducer_Authentification';
import Rducer_InizializationApp from './Redusers/Redicer_Inizialization';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from '@redux-devtools/extension';

let Reducer = combineReducers ( {
    ProfileData: Reduser_ProfilePage,
    DialogsPage: Reduser_DialogsPage,
    FriendsPage: Reducer_FriendsPage,
    SideBar: Redusers_SideBar,
    Authentification: Reducer_Authentification,
    form: formReducer,
    InizializationApp: Rducer_InizializationApp,
} );

const Redux_store = createStore(
    Reducer,
    composeWithDevTools( 
    applyMiddleware(thunkMiddleware)
    )
);
// console.log(Redux_store);
window.Redux_store = Redux_store;
export default Redux_store;