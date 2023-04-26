import c from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import DialogMessage from './DialogMessage/DialogMessage';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {FormProfile} from '../../Form/Form';
import {requaredInput} from '../../../Utils/ValidateForm/ValidatorDialogs';
import { compose } from "redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";


let DialogForm = (props) => {
    const {handleSubmit, reset} = props;
    const submit = (values) => {
        props.onSendMessage(values, props.id);
        props.reset();
    }    
    return (
        <form onSubmit={handleSubmit(submit)}>
            <Field name='textMessage' component={FormProfile} validate={requaredInput}/>
            <button className={c.gradientButton}>Отправить сообщение</button>
        </form>
    )
}

let FormDialogRedux = reduxForm({
    form: 'DialogFrom',
})(DialogForm)

const Dialogs = (props) => {

    let newSms = props.NewMessageBody;

    let users =  props.DialogsData.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} />
    )
    let userSms = props.DialogsData.map( el => 
            (`/Dialogs/${el.id}` === props.location.pathname) ? 
                <DialogMessage id={el.id} message={el.message}/> : null   
    )

    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {users}
            </div>
            <div className={c.Messages}>
                <div>{userSms}</div>
                <div className={c.mes}>
                    <FormDialogRedux  id={props.location.pathname} onSendMessage={props.onSendMessage}/>
                </div>
            </div>
        </div>
    );
}
export default compose (
    withRouter
)(Dialogs);




