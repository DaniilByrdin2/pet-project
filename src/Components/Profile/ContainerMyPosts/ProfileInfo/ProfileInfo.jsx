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

        </div>)
}

export default ProfileInfo;