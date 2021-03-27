/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarinaDetailQueryVariables = {
    id: string;
};
export type MarinaDetailQueryResponse = {
    readonly marina: {
        readonly id: string;
        readonly name: string;
    } | null;
};
export type MarinaDetailQuery = {
    readonly response: MarinaDetailQueryResponse;
    readonly variables: MarinaDetailQueryVariables;
};



/*
query MarinaDetailQuery(
  $id: ID!
) {
  marina(id: $id) {
    id
    name
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Marina",
    "kind": "LinkedField",
    "name": "marina",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarinaDetailQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarinaDetailQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2504e567d7345490665faa59c853ccd1",
    "id": null,
    "metadata": {},
    "name": "MarinaDetailQuery",
    "operationKind": "query",
    "text": "query MarinaDetailQuery(\n  $id: ID!\n) {\n  marina(id: $id) {\n    id\n    name\n  }\n}\n"
  }
};
})();
(node as any).hash = '895e5a2414edfe0d24539f5564b874ef';
export default node;
