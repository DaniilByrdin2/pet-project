import React from "react";
import { useState } from "react";

import Anonymus from '../../../../ContainerFriends/Friends/img/images.png';
import Status from './Status';

import styles from './info.module.css'

import  DownloadPhoto  from '../../../../UI-Components/Download/Download';

import { CloseCircleOutlined , EditOutlined } from '@ant-design/icons'

let Info = (props) => {

    const [ isChange, setIsChange ] = useState( false )

    let setPhoto = (e) => {
        // console.log('111');
        const photo = e.target.files[0];
        props.setPhotoProfile(photo)
        e.target.value = '';
    }

    return (
        <div className={ styles.infoProfileContainer }>
            <div className={ styles.infoProfile }>
                <img className={styles.infoProfilePhoto} src={props.UserProfile.data.photos.small != null ? props.UserProfile.data.photos.small : Anonymus} alt="avatar" />

                <div id = {styles.changeFoto} onClick={ () => { setIsChange( prev => !prev ) } }>
                    
                    { isChange ? <CloseCircleOutlined /> : <DownloadPhoto /> }

                </div>
                

                { isChange ? <input type="file" onChange={(e) => {
                    setPhoto(e)
                    setIsChange(prev => !prev)
                }} /> : <div className={styles.infoProfileData}>
                    <span>{props.UserProfile.data.aboutMe}</span>
                    <span>{props.UserProfile.data.fullName}</span>
                    <Status status={props.status} updateStatus={props.updateStatus} />
                </div>}

            </div>    
        </div>)
}    


export default Info;