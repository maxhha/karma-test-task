// LoginForm
import React from "react";
import { Link, withRouter } from "react-router-dom";
import LoginQuery from "/queries/login.js";


import "../commons/form.scss";
import "../commons/icon.scss";
import "./LoginForm.scss";

class LoginForm extends React.Component {

    usernameRef = React.createRef()
    passwordRef = React.createRef()

    onSubmit = (e) => {
        e.preventDefault();
        LoginQuery({
            "username": this.usernameRef.current.value,
            "password": this.passwordRef.current.value
        }).then(() => this.props.history.push('/user'))
        .catch((e) => console.error(e));
    }

    render () {
        return (
            <form
                className={`form login-form login-form_long-shadow ${this.props.className}`}
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
                <Link
                    className="form__link"
                    to="/register"
                >Forgot Password?</Link>
            </form>
        );
    }
}


export default withRouter(LoginForm);
