/**
 * @flow
 * @relayHash 45c8259d6e90c4a4a0d778087d9c42f0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserPageQueryVariables = {||};
export type UserPageQueryResponse = {|
  +getCurrentUser: ?{|
    +username: ?string
  |}
|};
export type UserPageQuery = {|
  variables: UserPageQueryVariables,
  response: UserPageQueryResponse,
|};
*/


/*
query UserPageQuery {
  getCurrentUser {
    username
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "getCurrentUser",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "username",
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
    "name": "UserPageQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UserPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "UserPageQuery",
    "id": null,
    "text": "query UserPageQuery {\n  getCurrentUser {\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '7b1e476c0b8be895506b317f438914fd';
module.exports = node;
