import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUser } from '../../Redux/Redusers/Reducer_Authentification';
import {Redirect} from 'react-router-dom';

class ContainerHeaderAPI extends React.Component {
    render () {
        return (
            <Header userData = {this.props} />
        )
    }
}

let mapDispatchToProps = (state) => {
    return {
        Authentification: state.Authentification
    }
}

let ContainerHeader = connect( mapDispatchToProps, {
    setAuthUser,
} )(ContainerHeaderAPI)

export default ContainerHeader;