import React from "react"
import cl from './login.module.css'
import { Field, reduxForm } from 'redux-form';
import c from '../ContainerDialogs/Dialogs/Dialogs.module.css';
import {FormProfile, FormProfilePassword} from '../Form/Form';
import {maxLength, requaredInput} from '../../Utils/ValidateForm/ValidatorLogin';


const maxSymbol = maxLength(20);

const Login = (props) => {
    const {handleSubmit, reset} = props;
    const submit = (value) => {
        props.thunkLoginUser(value);
        props.reset()
    }
    
    return (
        <div className={cl.form}>
            <div className={cl.form_title}>
                <form onSubmit={handleSubmit(submit)}>
                    <div className={cl.first} >
                        <span className={cl.login}>login</span>
                        <Field name="login" component={FormProfile} type="text" validate={[requaredInput, maxSymbol]} />
                        <span className={cl.pass}>password</span>
                        <Field name="password" component={FormProfilePassword} type="password" validate={[requaredInput, maxSymbol]} />
                        <div className={cl.checkBox}>
                            <Field name="rememberMe" component="input" type="checkbox" />
                            <span className={cl.rem}>Remember Me</span>
                        </div>
                        {props.error ? <div>{props.error}</div> : null}
                    </div>
                    <div>
                        <button className={c.gradientButton} type="button" onClick={reset}>Очистить форму</button>
                        <button className={c.gradientButton} type="submit">Отправить форму</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

let Form = reduxForm({
    form: 'login',
})(Login)

export default Form;