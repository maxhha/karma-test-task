// LoginForm
import React from "react";
import { Link, withRouter } from "react-router-dom";
import LoginQuery from "/queries/login.js";
import cn from "classnames";

import "../commons/form.scss";
import "../commons/icon.scss";
import "./LoginForm.scss";

class LoginForm extends React.Component {

    state = {
        error: null,
    }

    usernameRef = React.createRef()
    passwordRef = React.createRef()

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({error: null});
        LoginQuery({
            "username": this.usernameRef.current.value,
            "password": this.passwordRef.current.value
        }).then(() => this.props.history.push('/user'))
        .catch((e) => this.setState({error: e.message || e[0].message}));
    }

    render () {
        return (
            <form
                className={cn(
                    "form login-form",
                    {
                        "login-form_error login-form_long-shadow-error": !!this.state.error,
                        "login-form_long-shadow": !this.state.error
                    },
                    this.props.className
                )}
                onSubmit={this.onSubmit}
            >
                <div className="form__icon form__icon_long-shadow">
                    <div className="icon icon_full icon_person-shadow" />
                </div>
                <h2 className="form__title">Member Login</h2>
                <input
                    className="form__input"
                    ref={this.usernameRef}
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <input
                    className="form__input"
                    ref={this.passwordRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <input className="form__submit" type="submit" value="LOGIN"/>
                {this.state.error && (
                    <div className="form__error">{this.state.error}</div>
                )}
                <Link
                    className="form__link"
                    to="/register"
                >Forgot Password?</Link>
            </form>
        );
    }
}


export default withRouter(LoginForm);
