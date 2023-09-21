import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { compose } from "redux";

import Profile from "./Profile";

import {
ProfileUsers,
setUserProfilePageThunk,
getUserStatusThunk,
updateUserStatusThunk, setPhotoProfile
} from '../../Redux/Redusers/Reduser_ProfileData'
    
// import {thunkLogOutUser} from '../../Redux/Redusers/Reducer_Authentification';
    
import {withAuthRedirect} from '../HOC/HOC'
import {ProfileAPI} from '../../DAL/API';

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
                    updateStatus={this.props.updateUserStatusThunk}
                    setPhotoProfile={this.props.setPhotoProfile}
                    status={this.props.status}
                    
                    isAuth={this.props.isAuth}
                    thunkLogOutUser={this.props.thunkLogOutUser}
                />
            </>
        );
    }
}

let mapDispatchToProps = (state) => { 
    return {
        isAuth: state.Authentification.isAuth,
        Profile_Users: state.ProfileData.Profile_Users,
        status: state.ProfileData.status,
        userIDProfile: state.Authentification.id,
    }
}

export default compose(
    connect(mapDispatchToProps, {
            ProfileUsers,
            ProfileAPI,
            getUserStatusThunk,
            updateUserStatusThunk,
            setPhotoProfile,
            setUserProfilePageThunk,
            // thunkLogOutUser,
        }),
    withRouter,    
    withAuthRedirect,    
)(ContainerProfileAPI)
