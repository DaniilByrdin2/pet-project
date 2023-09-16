import c from './Profile.module.css';
import ContainerMyPosts from './ContainerMyPosts/MyPosts/ContainerMyPosts';
import ProfileInfo from './ContainerMyPosts/ProfileInfo/ProfileInfo'

const Profile = (props)=> {
    return (
        <div className={c.Profile_main}> 
            <ProfileInfo 
                            isAuth={props.isAuth}

                            // thunkLogOutUser={props.thunkLogOutUser}
                            
                            status={props.status}
                            updateStatus={props.updateStatus}
                            UserProfile ={props.UserProfile}
                            setPhotoProfile={props.setPhotoProfile}
            />
            <ContainerMyPosts />
        </div>
    );
}
export default Profile;