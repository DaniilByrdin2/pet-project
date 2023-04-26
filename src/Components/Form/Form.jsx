import React from "react";
import styles from './form.module.css'

export const FormProfile = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.wrapper}>
            <textarea {...input} {...meta} {...props} 
                className={ styles.formDefault + ' ' + (hasError ? styles.error : '') }/>
            { hasError && <span className={styles.red}>{meta.error}</span>} 
        </div> 
    );
}
export const FormProfilePassword = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.wrapper}>
            <input {...input} {...meta} {...props} 
                className={ styles.formDefault + ' ' + (hasError ? styles.error : '') }/>
            { hasError && <span className={styles.red}>{meta.error}</span>} 
        </div> 
    );
}