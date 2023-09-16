import React from "react";
import Preloader from '../../../Preloader/Preloader'
import Info from "./Info/Info";
import styles from './ProfileInfo.module.css'; 

let ProfileInfo = (props) => {
    return (
        <div className={styles.wrapper}>
            {props.UserProfile == null ? <Preloader /> :

                <Info
                    UserProfile={props.UserProfile}
                    status={props.status}
                    updateStatus={props.updateStatus}
                    setPhotoProfile={props.setPhotoProfile}
                />}


            {/* { props.isAuth ? 
                <button onClick={ props.thunkLogOutUser } className={styles.gradientButton}>Выйти</button> 
            :   <button className={styles.gradientButton}>Войти</button>} */}

        </div>)
}

export default ProfileInfo;