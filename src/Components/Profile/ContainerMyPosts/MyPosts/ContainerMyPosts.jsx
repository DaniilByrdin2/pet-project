import MyPosts from './MyPosts';
import { onPostChange, onAddPost} 
from '../../../../Redux/Redusers/Reduser_ProfileData';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.ProfileData.Posts,
        newPostText: state.ProfileData.newPostText,
    }
};

let ContainerMyPosts = connect(mapStateToProps, {
    onPostChange,
    onAddPost
})(MyPosts);

export default ContainerMyPosts;