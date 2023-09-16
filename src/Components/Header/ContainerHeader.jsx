import React from "react";
import { connect } from "react-redux";

import Header from "./Header";

import { setAuthUser } from '../../Redux/Redusers/Reducer_Authentification';
import { SelectPhotoUser } from './HelperSelectState/HelperHeader'

import { thunkLogOutUser } from '../../Redux/Redusers/Reducer_Authentification'

class ContainerHeaderAPI extends React.Component {
    render () {
        return (
            <Header userData = {this.props} thunkLogOutUser = { this.props.thunkLogOutUser } />
        )
    }
}



let mapDispatchToProps = (state) => {
    return {
        Authentification: state.Authentification,
        photoSmall: SelectPhotoUser(state)
    }
}

let ContainerHeader = connect( mapDispatchToProps, {
    setAuthUser,
    thunkLogOutUser,

} )(ContainerHeaderAPI)

export default ContainerHeader;