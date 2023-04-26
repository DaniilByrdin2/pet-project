import c from './Profile.module.css';
import ContainerMyPosts from './ContainerMyPosts/MyPosts/ContainerMyPosts';
import ProfileInfo from './ContainerMyPosts/ProfileInfo/ProfileInfo'

const Profile = (props)=> {
    return (
        <div className={c.Profile_main}> 
            <ProfileInfo 
                            status={props.status}
                            isAuth={props.isAuth}
                            updateStatus={props.updateStatus}
                            UserProfile ={props.UserProfile}
                            thunkLogOutUser={props.thunkLogOutUser}
                            setPhotoProfile={props.setPhotoProfile}
            />
            <ContainerMyPosts />
        </div>
    );
}
export default Profile;