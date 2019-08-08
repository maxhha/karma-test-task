/**
 * @flow
 * @relayHash ef64ff076cc7ee608ffd120657329684
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationVariables = {|
  username: string,
  password: string,
|};
export type loginMutationResponse = {|
  +loginUser: ?{|
    +token: ?string
  |}
|};
export type loginMutation = {|
  variables: loginMutationVariables,
  response: loginMutationResponse,
|};
*/


/*
mutation loginMutation(
  $username: String!
  $password: String!
) {
  loginUser(username: $username, password: $password) {
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "loginUser",
    "storageKey": null,
    "args": [
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
    "name": "loginMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "loginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "loginMutation",
    "id": null,
    "text": "mutation loginMutation(\n  $username: String!\n  $password: String!\n) {\n  loginUser(username: $username, password: $password) {\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bb32bddb55409220524e5abb93386325';
module.exports = node;
