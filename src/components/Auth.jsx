import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AUTH } from './../store/action/auth';

class Auth extends Component {
    state = {
        email: "",
        password: "",
        isSignUp: false
    }

    onChangeValue = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.auth(this.state.email, this.state.password, this.state.isSignUp)
    };

    onRegister = () => {
        this.setState({ isSignUp: true })
    }

    render() {
        const form = (label, type, placeholder) => {
            return (
                <div className="form-group">
                    <label>{label}</label>
                    <input
                        type={type} className="form-control"
                        placeholder={placeholder}
                        name={type}
                        onChange={this.onChangeValue} />
                </div>
            )
        }

        return (
            <div className="container account-pages mt-5">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    {form('Email address', 'email', 'Enter your email')}
                                    {form('Password', 'password', 'Enter your password')}
                                    <div className="text-center">
                                        <button className="btn btn-primary w-100">Login</button>
                                    </div>
                                    <div className="text-center mt-4">
                                        <p className="text-muted">Don't have an account?
                                        <button className="border-0 btn" onClick={this.onRegister}> Register </button>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatch = dispatch => {
    return {
        auth: (email, password, isSignUp) => dispatch(AUTH(email, password, isSignUp)),
    }
}

export default connect(undefined, mapDispatch)(Auth);