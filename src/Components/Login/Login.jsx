import React from "react"
import { Field, reduxForm } from 'redux-form';

import {FormProfile, FormProfilePassword} from '../Form/Form';
import {maxLength, requaredInput} from '../../Utils/ValidateForm/ValidatorLogin';

import styles from './login.module.css'
// import c from '../ContainerDialogs/Dialogs/Dialogs.module.css';

import { ButtonDashed } from '../UI-Components/Button/Button'


const maxSymbol = maxLength(20);

const Login = (props) => {
    const {handleSubmit, reset} = props;
    const submit = (value) => {
        props.thunkLoginUser(value);
        props.reset()
    }
    
    return (
        <div className={styles.form}>
            <div className={styles.form_title}>
                <form onSubmit={handleSubmit(submit)} className={ styles.form }>
                    <div className={styles.first} >
                        <span className={styles.login}>login</span>
                        <Field name="login" component={FormProfile} type="text" validate={[requaredInput, maxSymbol]} />
                        <span className={styles.pass}>password</span>
                        <Field name="password" component={FormProfilePassword} type="password" validate={[requaredInput, maxSymbol]} />
                        <div className={styles.checkBox}>
                            <Field name="rememberMe" component="input" type="checkbox" />
                            <span className={styles.rem}>Remember Me</span>
                        </div>
                        {props.error ? <div className={ styles.errorString }>{props.error}</div> : null}
                    </div>


                    <div className={ styles.buttonContainer }>
                        <ButtonDashed  fn = { reset }  text = { 'reset' } />
                        <button className={styles.buttonSubmit} type="submit">Submit</button>
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