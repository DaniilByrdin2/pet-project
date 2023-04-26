import {thunkAuthMe, thunkLoginUser} from '../Redusers/Reducer_Authentification';
const INIZIALIZATIONPAGE = 'INIZIALIZATIONPAGE';

let InizializatoeStore = {
    Inizialization: false,
}

const InizializationApp = (state = InizializatoeStore, action) => {
    switch (action.type) {
        case INIZIALIZATIONPAGE: {
            return {
                ...state,
                Inizialization: true,
            }
        }
    }
    return state;
}
export const setAutInizializationAC = () => ({type: INIZIALIZATIONPAGE});

export const InizializationUserAPP = () => {
    return (dispatch) => {
        let dispatchResult = dispatch(thunkAuthMe());
        Promise.all([dispatchResult]).then(() => {
            dispatch(setAutInizializationAC())
        })
    }
}
export default InizializationApp;