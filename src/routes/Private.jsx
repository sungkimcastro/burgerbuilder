import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ token, component: Component, ...rest }) => {
    if (!token) return <Redirect to="/" />
    return (
        <React.Fragment>
            <Route {...rest} render={props => (<Component {...props} />)} />
        </React.Fragment>
    )

}


const mapState = ({ auth: { token } }) => {
    return {
        token
    }
}

export default connect(mapState)(PrivateRoute)