import React from "react";
import Anonymus from '../../../../ContainerFriends/Friends/img/images.png';
import Status from './Status';

let Info = (props) => {

    let setPhoto = (e) => {
        const photo = e.target.files[0];
        props.setPhotoProfile(photo)
        e.target.value = '';
    }
    return (
        <div>
            <img src = {props.UserProfile.data.photos.small != null ? 
                props.UserProfile.data.photos.small : Anonymus} alt="img" />
            <input type="file" onChange={ setPhoto } />    
            <span>{props.UserProfile.data.aboutMe}</span>
            <span>{props.UserProfile.data.fullName}</span>
            <Status status={props.status} updateStatus={props.updateStatus} />
        </div>)
}    
export default Info;