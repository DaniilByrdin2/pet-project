import React from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export let withAuthRedirect = (Component) => {
    class ContainerComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to={'/login'} />;
            return <Component {...this.props} />;
        }
    }
    return ContainerComponent;
}