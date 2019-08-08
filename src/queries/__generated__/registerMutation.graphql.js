/**
 * @flow
 * @relayHash 5dcd0ca8aba3c1802baf1f6ce03c6e6f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerMutationVariables = {|
  username: string,
  password: string,
  confirm: string,
|};
export type registerMutationResponse = {|
  +registerUser: ?{|
    +token: ?string
  |}
|};
export type registerMutation = {|
  variables: registerMutationVariables,
  response: registerMutationResponse,
|};
*/


/*
mutation registerMutation(
  $username: String!
  $password: String!
  $confirm: String!
) {
  registerUser(username: $username, password: $password, confirmationPassword: $confirm) {
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "confirm",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "registerUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "confirmationPassword",
        "variableName": "confirm"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "Token",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "token",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "registerMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "registerMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "registerMutation",
    "id": null,
    "text": "mutation registerMutation(\n  $username: String!\n  $password: String!\n  $confirm: String!\n) {\n  registerUser(username: $username, password: $password, confirmationPassword: $confirm) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '002eaf9da5b2db078269d181902b4dbe';
module.exports = node;
