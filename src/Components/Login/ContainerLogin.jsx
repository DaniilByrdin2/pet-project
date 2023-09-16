import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import Form from "./Login";
import {withLoginAuthRedirect} from '../HOC/HOCloginRedirect';

import {thunkLoginUser} from '../../Redux/Redusers/Reducer_Authentification';

class ContainerLogin extends React.Component {
    render() {
        return (
            <Form  thunkLoginUser={this.props.thunkLoginUser}/>
        )
    }
}

let mapDispatchToProps = (state) => {
    return {
        Authentification: state.Authentification.isAuth,
    }
}

let ContainerLoginPage = compose(
    connect(mapDispatchToProps, { thunkLoginUser }),
    withLoginAuthRedirect)
(ContainerLogin)

export default ContainerLoginPage;