import React, { useState } from 'react';
import { BrowserRouter as Router,
    Route,
    Switch,
    Redirect } from 'react-router-dom';
import './App.scss';

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/user" component={UserPage} />
                <Route render={() => <Redirect to="/register"/>} />
            </Switch>
        </Router>
    </div>
  );
}

const LoginPage = () => {

    return (<div className="app__page app__page_login">
        <LoginForm />
    </div>);
}

const RegisterPage = () => {


    return (<div className="app__page app__page_register">
            <RegisterForm />
    </div>);
}

const UserPage = () => {
    return (<h1> Hello user </h1>);
}

export default App;
