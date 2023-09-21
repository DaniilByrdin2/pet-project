import { connect } from 'react-redux';

import { onPostChange, onAddPost} from '../../../../Redux/Redusers/Reduser_ProfileData';

import MyPosts from './MyPosts';



let mapStateToProps = (state) => {

    return {
        posts: state.ProfileData.Posts,
        newPostText: state.ProfileData.newPostText,
        // state: state
    }
};

let ContainerMyPosts = connect(mapStateToProps, {
    onPostChange,
    onAddPost
})(MyPosts);

export default ContainerMyPosts;