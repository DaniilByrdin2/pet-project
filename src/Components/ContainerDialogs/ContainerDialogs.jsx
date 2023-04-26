import Dialogs from './Dialogs/Dialogs';
import { onSendMessage,onNewMessageChange} 
from '../../Redux/Redusers/Reduser_DialogsPage';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../HOC/HOC';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        NewMessageBody: state.DialogsPage.NewMessageBody,
        isAuth: state.Authentification.isAuth,

        DialogsData: state.DialogsPage.DialogsData
    }
}

export default compose(
    connect (mapStateToProps, {
        onSendMessage,
        onNewMessageChange
    }),
    withAuthRedirect
)(Dialogs) 



