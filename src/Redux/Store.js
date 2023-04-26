// import Reduser_ProfilePage from './Redusers/Reduser_ProfileData';
// import Reduser_DialogsPage from './Redusers/Reduser_DialogsPage';
// // import {Reduser_SideBar} from './Redusers/Reduser_SideBar';

// let store = {
//     _state: {
//         ProfileData: {
//             Posts: [
//                 { id: 1, textPost: 'hi, my first post', likesCount: 12, },
//                 { id: 2, textPost: 'how are you?', likesCount: 52, },
//                 { id: 2, textPost: 'how are you?', likesCount: 52, }
//             ],
//             newPostText:'Что нового?',
//         },
//         DialogsPage: {
//             DialogsData: [
//                 { id: 1, name: 'Андрюшка каспийский', },
//                 { id: 2, name: 'Рыжий', },
//                 { id: 3, name: 'Старый', },
//                 { id: 4, name: 'Серый', },
//                 { id: 5, name: 'Агей', },
//                 { id: 6, name: 'Илюха Легенда', },
//                 { id: 7, name: 'Гошан', }
//             ],
//             MessagesData: [
//                 { id: 1, sms: 'Здарова', },
//                 { id: 2, sms: 'Ты где?', },
//                 { id: 3, sms: 'Блалала', },
//                 { id: 4, sms: 'Опа опа', },
//                 { id: 5, sms: 'Ты кто нахуй?', }
//             ],
//             NewMessageBody: '',
//         },
//         SideBar: [],
//     },
//     getState () {
//         return this._state;
//     },
//     _callSubscriber () {
//         console.log('заглушка');
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch (action) {
//         this._state.DialogsPage = Reduser_DialogsPage(this._state.DialogsPage, action);
//         this._state.ProfileData = Reduser_ProfilePage(this._state.ProfileData, action);
//         this._callSubscriber(this._state); 
//     }
// }
// export default store;
// window.stoore = store;