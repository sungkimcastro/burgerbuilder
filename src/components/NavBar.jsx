import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '../store/action/auth';

const NavBar = (props) => {

    const onLogout = () => {
        window.location = "/"
        props.logout()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                {props.token ? <Link to="/" className="nav-link"> Home </Link> : null}
            </ul>
            <ul className="navbar-nav float-right">
                {props.token ? <Link to="/orders" className="btn nav-link"> Orders </Link> : null}
                {props.token ?
                    <button className="btn nav-link" onClick={onLogout}>Log out</button>
                    :
                    <Link to="/auth" className="nav-link"> Login </Link>
                }
            </ul>
        </nav>
    );
}


const mapState = ({ auth: { token } }) => {
    return {
        token
    }
}

const mapDispatch = dispatch => {
    return {
        logout: () => dispatch(LOGOUT)
    }
}

export default connect(mapState, mapDispatch)(NavBar);