// LoginForm
import React from "react";
import "./LoginForm.scss";

class LoginForm extends React.Component {
    render () {
        return (
            <form className={`form form_long-shadow ${this.props.className}`}>
                <div className="form__icon form__icon_long-shadow">
                    <div className="icon icon_person-shadow" />
                </div>
                <h2 className="form__title">Member Login</h2>
                <input className="form__input" type="text" name="username" placeholder="Username"/>
                <input className="form__input form__input_password" type="password" name="password" placeholder="Password"/>
                <input className="form__submit" type="submit" value="Submit"/>
                <a className="form__link">Forgot Password?</a>
            </form>
        );
    }
}


export default LoginForm;
