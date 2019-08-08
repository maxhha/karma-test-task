import {commitMutation, graphql} from "react-relay";
import environment from "/Environment";
import {AUTH_TOKEN} from "/constants"

const mutation = graphql`
    mutation registerMutation($username: String!, $password: String!, $confirm: String!) {
        registerUser(username: $username, password: $password, confirmationPassword: $confirm) {
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
                    window.localStorage.setItem(AUTH_TOKEN, res.registerUser.token);
                    resolve()
                }
            },
            onError: (e) => reject([e])
        });
    });
}
