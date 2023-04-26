import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { ProfileUsers, 
    setUserProfilePageThunk, 
    getUserStatusThunk, 
    updateUserStatusThunk, setPhotoProfile} from '../../Redux/Redusers/Reduser_ProfileData'
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import {withAuthRedirect} from '../HOC/HOC'
import { compose } from "redux";
import {ProfileAPI} from '../../DAL/API';
import {thunkLogOutUser} from '../../Redux/Redusers/Reducer_Authentification';


class ContainerProfileAPI extends React.Component {
    refresh = () => {
        let userID = this.props.match.params.userID;
            if (!userID) {
                userID = 2;
                if (this.props.isAuth) {
                    userID = this.props.userIDProfile;
                }
            } 
            this.props.getUserStatusThunk(userID);
            this.props.setUserProfilePageThunk(userID);
    }
    componentDidMount() {
        this.refresh();
    }
    componentDidUpdate (prevProps) {
        if(this.props.match.params.userID != prevProps.match.params.userID) {
            this.refresh();
        }
    }
    render()  {
        return (
            <>
                <Profile 
                    UserProfile={this.props.Profile_Users}
                    isAuth={this.props.isAuth}
                    status={this.props.status}
                    thunkLogOutUser={this.props.thunkLogOutUser}
                    updateStatus={this.props.updateUserStatusThunk}
                    setPhotoProfile={this.props.setPhotoProfile}
                    />
            </>
        );
    }
}

let mapDispatchToProps = (state) => { 
    return {
        Profile_Users: state.ProfileData.Profile_Users,
        isAuth: state.Authentification.isAuth,
        status: state.ProfileData.status,
        userIDProfile: state.Authentification.id,
    }
}

export default compose(
    connect(mapDispatchToProps, {
            ProfileUsers,
            setUserProfilePageThunk,
            ProfileAPI,
            getUserStatusThunk,
            updateUserStatusThunk,
            thunkLogOutUser,
            setPhotoProfile,
        }),
    withRouter,    
    withAuthRedirect,    
)(ContainerProfileAPI)
