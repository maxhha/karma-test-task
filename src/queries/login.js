import {commitMutation, graphql} from "react-relay";
import environment from "/Environment";
import {AUTH_TOKEN} from "/constants"

const mutation = graphql`
    mutation loginMutation($username: String!, $password: String!) {
        loginUser(username: $username, password: $password) {
            token
        }
    }
`;

export default function(variables) {
    return new Promise((resolve, reject) => {
        commitMutation(environment, {
            mutation,
            variables,
            onCompleted: (res, err) => {
                if (err)
                    reject(err)
                else {
                    window.localStorage.setItem(AUTH_TOKEN, res.loginUser.token);
                    resolve()
                }
            },
            onError: (e) => reject([e])
        });
    });
}
