import React from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export let withLoginAuthRedirect = (Component) => {
    class ContainerComponent extends React.Component {
        render() {
            if (this.props.Authentification) {
                return <Redirect to={'/Profile'} />;
            }
            return <Component {...this.props} />;
        }
    }
    return ContainerComponent;
}