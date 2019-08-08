// RegisterForm
import React from "react";
import { Link, withRouter } from "react-router-dom";
import RegisterQuery from "/queries/register.js";

import "../commons/form.scss";
import "../commons/icon.scss";
import "./RegisterForm.scss";

class RegisterForm extends React.Component {

    usernameRef = React.createRef()
    passwordRef = React.createRef()
    confirmRef = React.createRef()

    onSubmit = (e) => {
        e.preventDefault();
        RegisterQuery({
            "username": this.usernameRef.current.value,
            "password": this.passwordRef.current.value,
            "confirm": this.confirmRef.current.value
        }).then(() => this.props.history.push('/user'))
        .catch((e) => console.error(e));
    }

    render () {
        return (
            <form
                className={`form register-form register-form_long-shadow ${this.props.className}`}
                onSubmit={this.onSubmit}
            >
                <div className="form__icon form__icon_long-shadow">
                    <div className="icon icon_full icon_pen-shadow" />
                </div>
                <h2 className="form__title">Register</h2>
                <input
                    className="form__input"
                    ref={this.usernameRef}
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />
                <input
                    className="form__input form__input_password"
                    ref={this.passwordRef}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                />
                <input
                    className="form__input form__input_password"
                    ref={this.confirmRef}
                    type="password"
                    name="confirm-password"
                    placeholder="Confirm Password"
                    required
                />
                <input
                    className="form__submit"
                    type="submit"
                    value="REGISTER"
                />
                <Link
                    className="form__link"
                    to="/login"
                >Member Login</Link>
            </form>
        );
    }
}


export default withRouter(RegisterForm);
