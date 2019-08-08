// RegisterForm
import React from "react";
import { Link, withRouter } from "react-router-dom";
import RegisterQuery from "/queries/register.js";
import cn from "classnames";

import "../commons/form.scss";
import "../commons/icon.scss";
import "./RegisterForm.scss";

class RegisterForm extends React.Component {

    state = {
        error: null,
    }

    usernameRef = React.createRef()
    passwordRef = React.createRef()
    confirmRef = React.createRef()

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({state: null});
        RegisterQuery({
            "username": this.usernameRef.current.value,
            "password": this.passwordRef.current.value,
            "confirm": this.confirmRef.current.value
        }).then(() => this.props.history.push('/user'))
        .catch((e) => this.setState({error: e.message || e[0].message}));
    }

    render () {
        return (
            <form
                className={cn(
                    "form register-form",
                    {
                        "register-form_error register-form_long-shadow-error": !!this.state.error,
                        "register-form_long-shadow": !this.state.error
                    },
                    this.props.className
                )}
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
                {this.state.error && (
                    <div className="form__error">{this.state.error}</div>
                )}
                <Link
                    className="form__link"
                    to="/login"
                >Member Login</Link>
            </form>
        );
    }
}


export default withRouter(RegisterForm);
