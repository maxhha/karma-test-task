// RegisterForm
import React from "react";

import "../commons/form.scss";
import "../commons/icon.scss";
import "./RegisterForm.scss";

class RegisterForm extends React.Component {
    render () {
        return (
            <form className={`form register-form register-form_long-shadow ${this.props.className}`}>
                <div className="form__icon form__icon_long-shadow">
                    <div className="icon icon_full icon_pen-shadow" />
                </div>
                <h2 className="form__title">Register</h2>
                <input className="form__input" type="text" name="username" placeholder="Username"/>
                <input className="form__input form__input_password" type="password" name="password" placeholder="Password"/>
                <input className="form__input form__input_password" type="password" name="confirm-password" placeholder="Confirm Password"/>
                <input className="form__submit" type="submit" value="REGISTER"/>
                <a className="form__link">Member Login</a>
            </form>
        );
    }
}


export default RegisterForm;
