import React from 'react';
import { Link } from 'react-router-dom';
import { QueryRenderer, graphql } from 'react-relay';
import environment from "/Environment";
import { AUTH_TOKEN } from "/constants";

import "./UserPage.scss";

export class UserPage extends React.Component {
    render() {
        return (<QueryRenderer
            environment={environment}
            query={graphql`
                query UserPageQuery {
                    getCurrentUser {
                        username
                    }
                }
            `}
            render={this.queryRender}
        />)
    }

    queryRender = ({error, props, retry}) => {
        if (error || (props && !props.getCurrentUser)) {
            console.log(error);
            return (
                <div className="user-page">
                    <h2 className="user-page__error">Error</h2>
                    <Link
                        className="user-page__home"
                        to="/"
                    >Home</Link>
                </div>
            );
        } else if (props) {
            console.log(props);
            return(
                <div className="user-page">
                    <h2 className="user-page__title">
                        Hello, <span className="user-page__username">
                            {props.getCurrentUser.username}
                        </span>!
                    </h2>

                    <Link
                        className="user-page__home"
                        to="/"
                        onClick={() =>
                            window.localStorage.removeItem(AUTH_TOKEN)
                        }
                    >Logout</Link>
                </div>
            );
        }
        return(<div className="user-page">Loading</div>)
    }
}

export default UserPage;
