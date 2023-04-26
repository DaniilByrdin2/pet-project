import React from "react";
import Form from "./Login";
import { connect } from "react-redux";
import {thunkLoginUser} from '../../Redux/Redusers/Reducer_Authentification';
import {withLoginAuthRedirect} from '../HOC/HOCloginRedirect';
import { compose } from "redux";

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