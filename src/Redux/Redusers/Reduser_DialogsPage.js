const UPDATE_NEW_MESSAGE_BODY = 'NewMessageBody';
const SEND_MESSAGE = 'SEND_MESSAGE';
// let InizializatoeStoredf = {
//     DialogsData: [
//         { id: 1, name: 'Андрюшка каспийский', message:[ {dateSms: '1', textSms:'111',}]},
//         { id: 2, name: 'Андрюшка ', message:[ {dateSms: '2', textSms:'222',}]},
//         { id: 2, name: 'rfrrf ', message:[ {dateSms: '3', textSms:'3333',}]},
//         { id: 2, name: 'wedewd ', message:[ {dateSms: '4', textSms:'4444',}]},
//     ],
//     MessagesData: [
    //         { id: 1, messageMy: [{ dateSms: '', textSms: 'Здарова'}] },
    //         { id: 2, messageMy: [{ dateSms: '', textSms: 'Здаро123444ва'}]},
    //     ],
    //     NewMessageBody: '',
    // }
    
    // let InizializatoeStore = {
    //     DialogsData: [
    //         { id: 1, name: 'Андрюшка каспийский', },
    //         { id: 2, name: 'Рыжий', },
    //         { id: 3, name: 'Старый', },
    //         { id: 4, name: 'Серый', },
    //         { id: 5, name: 'Агей', },
    //         { id: 6, name: 'Илюха Легенда', },
    //         { id: 7, name: 'Гошан', }
    //     ],
    //     MessagesData: [
    //         { id: 1, sms: 'Здарова', smsMy: 'adsada' },
    //         { id: 2, sms: 'Ты где?', smsMy: 'adsada'},
    //         { id: 3, sms: 'Блалала', smsMy: 'adsada'},
    //         { id: 4, sms: 'Опа опа', smsMy: 'adsada'},
    //         { id: 5, sms: 'Ты кто нахуй?', smsMy: 'adsada'}
    //     ],
    //     NewMessageBody: '',
    // }

const fjf = {
        DialogsData: [
        { id: 1, name: 'Андрюшка каспийский', message:[ 
            { dateSms: '1', textSms:'111', meSms: false },
            { dateSms: '2', textSms:'здарова', meSms: true },
            { dateSms: '3', textSms:'11111', meSms: false },
            { dateSms: '15', textSms:'здарова', meSms: true },
        ]},
        { id: 2, name: 'Heorgiy', message:[ 
            { dateSms: '1', textSms:'2222', meSms: false },
            { dateSms: '2', textSms:'здарова', meSms: true },
            { dateSms: '3', textSms:'2222', meSms: false },
            { dateSms: '15', textSms:'здарова', meSms: true },
        ]},
    ],
    NewMessageBody: '',
}

// const fn = (obj, a = 1, mes = 'zzz') => {
//     let objSms = { dateSms: Date.now(), textSms: mes, meSms: true } 
//     let st = {
//         ...obj,
//         DialogsData: [ 
//             ...obj.DialogsData.map(
//                 el => {
//                     if(el.id === a) { 
//                         return {...el, message: [...el.message, objSms]}  
//                     } else {
//                         return { ...el, message: {...el.message} }
//                     }
//                 }) 
//         ]
//     }
//     return st
// }
// console.log(fn(fjf));
const Reduser_DialogsPage = (state = fjf, action)=> { 
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        return {
            ...state,
            NewMessageBody: action.body
        }
    } else if (action.type === SEND_MESSAGE) {
        let objSms = { dateSms: Date.now(), textSms: action.newMessage, meSms: true }
        let id = Number( action.idNow.split('').slice(9)[0] )

        return {
            ...state,
            DialogsData: [
                ...state.DialogsData.map(
                    el => {
                        if (el.id === id ) {
                            return { ...el, message: [...el.message, objSms] }
                        } else {
                            return { ...el, message: [ ...el.message ] }
                        }
                    })
            ]
        }
    } 
    return state;
}

export const onNewMessageChange = (body) =>  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });
export const onSendMessage = (newMessageBody, id) => ({ type: SEND_MESSAGE, newMessage: newMessageBody.textMessage, idNow: id });

export default Reduser_DialogsPage;